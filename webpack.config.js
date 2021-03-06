var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports = {
    //entry tells webpack where the main entrypoint of the app is
    entry: [
        './app/index.js'
    ],
    //output instructs webpack where to put the file that it creates for us
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    //module tells webpack what transformations to make on our code
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};
