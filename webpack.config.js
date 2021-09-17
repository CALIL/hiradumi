const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    // devtool: 'inline-source-map',
    entry: './Hiradumi.tsx',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: './Hiradumi.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    // devtool: 'inline-source-map',
    entry: './DefaultItem.tsx',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: './DefaultItem.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
}