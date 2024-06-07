const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api1',  // 指定要代理的路径
        createProxyMiddleware({
            target: 'http://localhost:5000',  // 目标服务器的地址
            changeOrigin: true,  // 更改请求的源
            pathRewrite: {
                '^/api1': '',  // 将请求路径中的/api部分去掉
            },
        })
    );
};


