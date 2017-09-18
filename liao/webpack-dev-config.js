const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
  // devtool 指明了sourcemap的生成方式，它有七个选项，具体请参考 https://segmentfault.com/a/1190000004280859
  // sourcemap 的作用就是为调试代码提供便利
  // cheap-module-eval-source-map 绝大多数情况下都会是最好的选择，这也是下版本 webpack 的默认选项。
  devtool: 'cheap-module-eval-source-map',

  // 入口文件配置
  entry: [
    // you can add "react-hot-loader/patch" as the very first item to the "entry" array in its config. 
    // Alternatively, you can add require("react-hot-loader/patch") 
    // as the very first line in the application code, before any other imports.
    // https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',

    // 项目入口文件
    path.resolve(__dirname, 'src/index.js')
  ],

  // 文件输出配置
  // 告诉webpack怎样存储输出以及存储在哪里
  output: {
    filename: 'bundle.js',

    // path 告诉webpack将结果存储到哪里
    // 输出目录的配置，模板、样式、脚本、图片等资源路径位置都相对于path
    path: path.join(__dirname, 'src'),

    // publicPath 指在css、html等页面中，引用静态资源的根路径
    // 在生产环境中，它的值为服务器地址
    publicPath: '/'
  },

  // resolve 自动添加后缀，默认使用.js
  // 空字符串是为了resolve一些在import文件时不带文件扩展名的表达式
  resolve: {
    mainFiles: ['index.web', 'index'],// 这里哦
    modules: ['app', 'node_modules', path.join(__dirname, '../node_modules')],
    extensions: [
      '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx',
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main',
    ],

  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,

      },

      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: svgDirs,
        options: {
          runtimeCompat: true
        }
      },

      // css modules 组件样式私有化
      // 详见：http://www.ruanyifeng.com/blog/2016/06/css_modules.html
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'src/style')
      },

      // CSS 全局样式
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap!postcss-loader',
        include: path.resolve(__dirname, 'src/style')
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },

      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    // 启用热替换，仅开发模式使用
    new webpack.HotModuleReplacementPlugin(),

    // 允许错误不打断程序，仅开发模式时用
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),

    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/template.html',
      title: '开发模式',
      // favicon:'./src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true,
      // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
      // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
      inject: 'body'
    })

  ],
}

