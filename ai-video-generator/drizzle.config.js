import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/config/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://ai-short-video-generator_owner:aUAIyuT29YPc@ep-falling-recipe-a5yfzbax.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require",
  },

});