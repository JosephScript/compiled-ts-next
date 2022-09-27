// const { CompiledExtractPlugin } = require("@compiled/webpack-loader")
// const {
//   default: MiniCssExtractPlugin,
// } = require('next/dist/build/webpack/plugins/mini-css-extract-plugin.js')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [{ 
        loader: '@compiled/webpack-loader', 
        options: {
          importReact: false,
          ssr: false,
          // extract: true,
      } }],
    })
    // config.module.rules.push({
    //   test: /\.css$/i,
    //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
    // })
    // config.plugins.push(new CompiledExtractPlugin())
    // config.plugins.push(new MiniCssExtractPlugin({
    //   filename: 'static/css/[contenthash].css',
    //   chunkFilename: 'static/css/[contenthash].css',
    //   ignoreOrder: true,
    // }))

    return config
  },
}
