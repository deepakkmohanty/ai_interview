/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://ai_interview_owner:3gofPJuSbT8D@ep-soft-surf-a5v2bb7l.us-east-2.aws.neon.tech/ai_interview?sslmode=require",
  },
};
