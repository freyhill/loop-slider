
var webpack  = require("webpack")

module.exports = {
  entry: {
    index:"./public/js/index.js"
  },
  output: {
      path: './public/build', //输出路径 __dirname,
      publicPath:"./",
      filename: "[name].js" //输出名称  name就是上面entry定义的page1,page2
     
  },
  module:{
    loaders:[
       {test : /\.css$/  , loader :"style!css" }, //css
       {test : /\.scss$/ , loaders : ["style", "css", "sass"] }, //sass

       {test : /\.js$/   , loader: 'babel',query: {presets:['react','es2015']} },//这是react使用es6
       //{test : /\.js$/   , loader: 'babel',query: {presets:'es2015'} }, //这是一般情况下使用es6
       {test : /\.(png|jpg|gif)$/ , loader:'url?limit=8192&name=images/[name].[ext]'}, //
       {test : /\.json$/ , loader:"json-loader"},
       {test : /\.html$/, loader:"mustache"}

     ]
  }

}

