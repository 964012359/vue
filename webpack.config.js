
//由于webpack是基于node构建的，所有webpack文件中，任何合法的node代码都支持
const path = require('path');

const webpack = require('webpack');

//导入
//作用：1.自动在内存中根据浏览器生成
const htmlWevpackPlugin = require('html-webpack-plugin');

//1.向外暴露一个配置对象
module.exports = {
    //配置打包模式为开发模式
    mode:'development',
    //使用webpack打包哪一个文件
    entry:path.join(__dirname,'./src/index.js'),
    //将打包好的文件输出到哪一个目录
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'main.js'//指定输出文件的名称
    },
    //配置命令参数的第二种凡是
    devServer:{
        hot:true,
        open:true,
        port:3000
    },
    plugins:[//所有的webpack插件都配置在这里
            new htmlWevpackPlugin({
                //指定模板文件的路径
                template:path.join(__dirname,'./src/index.html'),
                //设置生成在内存中页面的名称
                fiename:'index.html',
            }),
        new webpack.HotModuleReplacementPlugin()
        ],

    //匹配所有第三方loader木块的
    module:{
        rules:[//设置第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//处理css的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//处理css的loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|jpeg|svg)$/,
            use:['url-loader?limit=28340&name=[hash:8][name].[ext]']},


            //配置字体图标路径
            {test:/\.(ttf|woff2|woff|eot)$/,use:['url-loader']},
            //配置更高级的js的loader模块，使用Babel来转换的
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //注意：配置babel的loader规则时必须把node_modules排除，防止把node_modules中的js也转换了


            //配置.vue的文件
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },


    //配置可以修改vue被导入时包的路径
    resolve:{
        alias:{
            'Vue$':'vue/dist/vue.js'
        }
    }


}