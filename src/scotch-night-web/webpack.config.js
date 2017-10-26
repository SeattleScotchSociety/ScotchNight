const DashboardPlugin = require('webpack-dashboard/plugin');
const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "site.css",
    disable: process.env.NODE_ENV !== 'production'
});

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return {
        context: resolve('src'),
        devServer: {
            historyApiFallback: true
        },
        devtool: env.prod ? 'source-map' : 'eval',
        entry: './app/index.tsx',
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM"
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.ts|\.tsx$/, use: 'awesome-typescript-loader' },

                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

                {
                    test: /\.scss|.css$/,
                    use: isDevBuild ? ['style-loader', 'css-loader', 'sass-loader'] : extractSass.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                },
            ]
        },
        node: {
            fs: 'empty'
        },
        output: {
            path: resolve('dist'),
            filename: 'bundle.js',
            publicPath: '/dist/',
            pathinfo: !env.prod
        },
        plugins: [
            new CheckerPlugin(),
            extractSass,
            new DashboardPlugin()
        ],
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
    }
}