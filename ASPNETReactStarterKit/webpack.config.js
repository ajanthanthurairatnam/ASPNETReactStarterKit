const path = require('path');


module.exports = {
    mode: "production",
    entry: './wwwroot/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js',
        library: 'myLibrary'
    },



    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {

        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']

    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};