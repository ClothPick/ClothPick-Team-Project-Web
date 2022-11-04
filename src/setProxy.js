const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: "http://192.168.0.101:8087",
      changeOrigin: true,
    })
  );
};