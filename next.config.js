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
            },
            {
                source: '/api/ferdikaza',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin', value: '*'
                    },
                ]
            },
            {
                source: '/api/kasko',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin', value: '*'
                    },
                ]
            },
            {
                source: '/api/dask',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin', value: '*'
                    },
                ]
            },
            {
                source: '/api/konut',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin', value: '*'
                    },
                ]
            },
            {
                source: '/api/isyeri',
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
