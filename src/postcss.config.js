const pxtorem = require('postcss-pxtorem');
const px2remOpts = {
  rootValue: 50,
  propWhiteList: [],
};

module.exports = {
    plugins: [
        require('precss'),
        require('rucksack-css'),
        require('autoprefixer')({
             browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
        }),
        //pxtorem(px2remOpts)
    ]
}