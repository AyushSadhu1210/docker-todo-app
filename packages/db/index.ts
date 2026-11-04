import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Add it to the repository root .env file or your runtime environment.",
  );
}

const adapter = new PrismaPg({ connectionString });
export const prismaClient = new PrismaClient({ adapter });
