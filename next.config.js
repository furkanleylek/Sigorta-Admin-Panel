/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/api/trafik',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin', value: '*'
                    },
                ]
            }
        ]
    }
}

module.exports = nextConfig
