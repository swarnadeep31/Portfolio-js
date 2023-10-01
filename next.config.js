/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        // serverActions: false
    },
    images: {
        domains:['cdn.sanity.io']
    }
};

module.exports = nextConfig;
