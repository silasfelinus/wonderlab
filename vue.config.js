const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // Listen on all available network interfaces
    allowedHosts: [
      '.acrocatranch.com',
      '.cafepurr.com',
      '.purrsalon.com',
      '.mermaidsofvenice.com',
      '.ninjacatfox.com',
      '.enhanceenhanceenhance.com',
      'happyrainbowsalon.com',
      'hairbysuperkate.com',
      '192.168.5.229',
      '192.168.4.3',
      '192.168.5.231',
      '127.0.0.1',
      'localhost',
    ],
  },
})