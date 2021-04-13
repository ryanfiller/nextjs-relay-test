module.exports = {
  future: {
    webpack5: true,
  },

  webpack: (config, options) => {

    // for graphiql
    config.module.rules.push({
      test: /\.flow$/,
      use: 'null-loader'
    })

    return config
  }
}

