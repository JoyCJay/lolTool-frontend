module.exports = {
    //publicPath: process.env.NODE_ENV === "production"? "lolTool-frontend" : "/",
    publicPath:"/",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9090',
                ws: true, //代理websocket
                changeOrigin: true, //允许跨域改为target
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}