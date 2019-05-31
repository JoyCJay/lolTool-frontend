module.exports = {
    //publicPath: process.env.NODE_ENV === "production"? "lolTool-frontend" : "/",
    publicPath:"/",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                // ws: true,
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}