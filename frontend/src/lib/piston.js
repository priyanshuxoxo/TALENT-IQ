//piston api is a service for code execution
const PISTON_API = "https://emkc.org/api/v2/piston";
const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  java: { language: "java", version: "15.0.2" },
  python: { language: "python", version: "3.10.0" },
};

/**
 *
 * @param {
 * string
 * } language- programming language
 * @param {string} code - source code to execute
 * @returns {Promise<success:boolean,output?:string,error?:string>}
 */
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language.toLowerCase()];
    if (!languageConfig) {
      throw new Error("Unsupported language");
    }
    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: languageConfig.language,
        version: languageConfig.version,
        files: [
          {
            name: `main.${getFileExtension(language)}`,
            content: code,
          },
        ],
      }),
    });
    if (!response.ok) {
      return { success: false, error: `API Error: ${response.statusText}` };
    }
    const data = await response.json();
    const output = data.run.output || "";
    const stderr = data.run.stderr || "";
    if (stderr) {
      return { success: false, output: output, error: stderr };
    }
    return { success: true, output: output || "No Output" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    java: "java",
    python: "py",
  };
  return extensions[language.toLowerCase()] || "txt";
}
