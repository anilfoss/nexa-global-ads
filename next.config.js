/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "", // Remove the '/next' base path if it's present
    assetPrefix: "", // Ensure assets load from the root
};

export default nextConfig;
