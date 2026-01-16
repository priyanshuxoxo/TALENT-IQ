import React, { useState } from "react";

function OutputPanel({ output }) {
  const [activeTab, setActiveTab] = useState("output");

  const isSuccess = output?.success;

  return (
    <div className="h-full bg-base-100 flex flex-col border-t border-base-300">
      {/* Header Tabs */}
      <div className="flex items-center justify-between px-4 py-2 bg-base-200 border-b border-base-300">
        <div className="flex gap-4 text-sm font-medium">
          {["output", "result"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 border-b-2 transition ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-base-content/60"
              }`}
            >
              {tab === "output" ? "Output" : "Result"}
            </button>
          ))}
        </div>

        {output && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              isSuccess
                ? "bg-success/20 text-success"
                : "bg-error/20 text-error"
            }`}
          >
            {isSuccess ? "Accepted" : "Wrong Answer"}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-auto p-4 text-sm font-mono whitespace-pre-wrap">
        {!output ? (
          <p className="text-base-content/50">
            Click <b>Run Code</b> to see the output here...
          </p>
        ) : activeTab === "output" ? (
          <pre
            className={`${isSuccess ? "text-success" : "text-base-content"}`}
          >
            {output.output || "No Output"}
          </pre>
        ) : (
          <div>
            {isSuccess ? (
              <p className="text-success font-semibold">
                ✅ All test cases passed!
              </p>
            ) : (
              <>
                <p className="text-error font-semibold mb-2">
                  ❌ Test cases failed
                </p>
                <pre className="text-error">{output.error}</pre>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
