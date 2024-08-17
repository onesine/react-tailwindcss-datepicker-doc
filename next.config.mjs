/** @type {import('next').NextConfig} */

import withTM from "next-transpile-modules";

const transpileModules = withTM(["react-syntax-highlighter"]);

const nextConfig = { ...transpileModules };

export default nextConfig;
