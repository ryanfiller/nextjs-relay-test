module.exports = {
  future: {
    webpack5: true,
  },

  env: {
    NEXT_PUBLIC_RELAY_ENDPOINT: process.env.NEXT_PUBLIC_RELAY_ENDPOINT,
    DEMO_ENDPOINT: process.env.DEMO_ENDPOINT
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

