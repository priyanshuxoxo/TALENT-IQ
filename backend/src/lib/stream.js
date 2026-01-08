import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";
import { StreamClient } from "@stream-io/node-sdk";
const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;
if (!apiKey || !apiSecret) {
  console.error(
    "Stream API key or secret is not defined in environment variables"
  );
}
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); //this for chat messaging

export const streamClient = new StreamClient(apiKey, apiSecret); //this will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("stream user upserted successfully", userData);
  } catch (error) {
    console.error("Error upserting user to Stream: ", error);
  }
};
export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("stream user deleted succesfully");
  } catch (error) {
    console.error("Error deleting user from Stream: ", error);
  }
};
