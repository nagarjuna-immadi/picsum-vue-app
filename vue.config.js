module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/picsum-vue-app/' : '/',
    configureWebpack: {
        devtool: 'source-map'
    }
}