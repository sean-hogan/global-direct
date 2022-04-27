module.exports = {
    /* ... */
    publicPath: process.env.NODE_ENV === 'production' ? '/direct' : '/',
    devServer: {
        host: 'localhost'
    },
};