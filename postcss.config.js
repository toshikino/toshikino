module.exports = (ctx) => ({
  map: ctx.map,
  plugins: [
    require('autoprefixer')({
      'overrideBrowserslist': [
        'last 2 versions',
        'ie 10'
      ]
    }),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-logical')({ dir: 'ltr' })
  ]
})