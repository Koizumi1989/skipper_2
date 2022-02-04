const { environment } = require('@rails/webpacker')

module.exports = environment

// jqueryが使えるようになる設定
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery": "jquery" //ココを追記
  })
)
