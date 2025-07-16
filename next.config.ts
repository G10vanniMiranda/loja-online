import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // permite qualquer domínio externo
      },
    ],
    // Opcional: permite todos os formatos de imagem (já é padrão)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
