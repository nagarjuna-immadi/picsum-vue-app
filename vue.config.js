const path = require("path");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/picsum-vue-app/' : '/',
    configureWebpack: {
        devtool: 'source-map'
    },
    outputDir: path.resolve(__dirname, "docs"),
}