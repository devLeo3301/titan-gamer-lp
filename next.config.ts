/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // O SEGREDO ESTÁ AQUI: Deve ser o nome exato do repositório da URL
  basePath: '/titan-gamer-lp',
};

export default nextConfig;