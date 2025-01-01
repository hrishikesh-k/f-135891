require("airtable");

import AirtableClient from "./utils/airtable-client.mjs";

import { testZap } from "./zaps/testZap.mjs";

// Docs on request and context https://docs.netlify.com/functions/build/#code-your-function-2
export default async (request, context) => {
  try {
    console.log("Proxy - Request received");

    var airtableClient = new AirtableClient("test", "test");

    await testZap(airtableClient);

    console.log("Proxy - Task completed successfully");
    return new Response("Task completed successfully");

  } catch (error) {
    console.log("Proxy - Error: " + error.toString());
    return new Response(error.toString(), {
      status: 500,
    });
  }
};