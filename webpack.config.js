const path = require('path');

module.exports = {
  mode: 'production',
  // developmentモードのeval系devtoolはlib/index.jsにeval()を埋め込むため無効化する
  devtool: false,
  entry: './src/Hiradumi.tsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'lib'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
        ],
      },
    ],
  },
  externals: [
    {
      "react": {
        "commonjs": "react",
        "commonjs2": "react",
        "amd": "react",
        "root": "React"
    },
    "react-dom": {
        "commonjs": "react-dom",
        "commonjs2": "react-dom",
        "amd": "react-dom",
        "root": "ReactDOM"
      }
    },
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}