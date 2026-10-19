import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Keep environment-specific settings, then load shared backend/project .env values.
dotenv.config({ path: fileURLToPath(new URL("../../.env", import.meta.url)) });
dotenv.config({ path: fileURLToPath(new URL("../../../.env", import.meta.url)) });

export const {
  NODE_ENV,
  Frontend_Url,
  DB_URI,
  PORT,
  JWT_SECRET,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  ADMIN_EMAIL,
  XKIRO_API,
  XKIRO_MODEL = "qwen/qwen3.8-omni-flash:free",
} = process.env;
