/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "movies.universalpictures.com",
			},
			{
				protocol: "https",
				hostname: "cdn.myportfolio.com",
			},
			{
				protocol: "https",
				hostname: "trecobox.com.br",
			},
			{
				protocol: "https",
				hostname: "encrypted-tbn0.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "m.media-amazon.com",
			},
		],
	},
};

export default nextConfig;
