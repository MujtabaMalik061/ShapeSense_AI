import { XKIRO_API, XKIRO_MODEL } from "../config/env.js";

export const generatePlan = async (prompt) => {
  if (!XKIRO_API?.trim()) {
    throw new Error("XKIRO_API is missing. Set it in your .env file.");
  }

  const response = await fetch("https://api.xkiro.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${XKIRO_API}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: XKIRO_MODEL,
      messages: [{ role: "user", content: prompt }],
    }),
    signal: AbortSignal.timeout(120_000),
  });

  if (!response.ok) {
    // Do not expose upstream response bodies or credentials to clients.
    throw new Error(`XKIRO request failed (HTTP ${response.status}).`);
  }

  const result = await response.json();
  const text = result.choices?.[0]?.message?.content;
  if (typeof text !== "string" || !text.trim()) {
    throw new Error("XKIRO returned an empty or invalid response.");
  }

  return text;
};
