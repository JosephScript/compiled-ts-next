const { CompiledExtractPlugin } = require("@compiled/webpack-loader")

module.exports = { 
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{
        loader: 'babel-loader',
      }, {
        loader: '@compiled/webpack-loader',
        options: {
          extensions: [
            '.ts',
            '.tsx',
          ],
          importReact: true,
          ssr: true,
          extract: true,
          parserBabelPlugins: ['typescript'],
        }}],
    })
    config.plugins.push(new CompiledExtractPlugin())
    return config
  },
  experimental: {
    externalDir: true,
  },
  pageExtensions: ['tsx'],
  reactStrictMode: process.env.NODE_ENV !== 'production',
}
