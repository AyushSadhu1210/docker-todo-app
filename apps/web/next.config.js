import nextEnv from "@next/env";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const { loadEnvConfig } = nextEnv;

// Load the shared monorepo env file from the repository root.
const repoRoot = resolve(fileURLToPath(new URL(".", import.meta.url)), "../..");
// forceReload is required: Next has already loaded (and cached) env for apps/web.
loadEnvConfig(repoRoot, process.env.NODE_ENV !== "production", console, true);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
