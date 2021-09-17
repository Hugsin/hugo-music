const path = require("path");
// const { find } = require("lodash");
// const argv = require("yargs").argv;
// const CompressionPlugin = require("compression-webpack-plugin");
// const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// .BundleAnalyzerPlugin;
// const { env } = argv;

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");

const config = {
  configureWebpack: config => {
    return {
      plugins: [
        // Ignore all locale files of moment.js
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // 依赖大小分析工具
        // new BundleAnalyzerPlugin(),
        // new CompressionPlugin({
        //   test: /\.js$|\.html$|.\css/, //匹配文件名
        //   threshold: 10240, //对超过10k的数据压缩
        //   deleteOriginalAssets: false //不删除源文件
        // })
        new ImageminPlugin({
          plugins: [
            ImageminMozjpeg({
              quality: 100,
              progressive: true
            })
          ]
        })
      ]
    };
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    host: "0.0.0.0",
    port: process.env.port || process.env.npm_config_port || 80,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_BASE_HOST,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    },
    disableHostCheck: true
  },
  // 开启 CSS source maps?
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          // 主题配置颜色
          // "primary-color": "#2b85e4"
          // "primary-color": "#1976D2",
          // "body-background": "#131722",
          // "component-background": "#131722",
          // "border-color-base": "#212738",
          // "text-color": "#c5cbce"
          "primary-color": "#d5504b",
          "link-color": "#d5504b",
          "success-color": "d5504b"
        },
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      // List native deps here if they don't work
      externals: ["my-native-dep"],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ["../../node_modules", "./node_modules"],
      // seting background nodeIntegration
      nodeIntegration: true,
      preload: "src/preload.ts",
      builderOptions: {
        appId: "com.notesmusic.app",
        productName: "NotesMusic", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "Copyright © 2019", //版权信息
        mac: {
          icon: "./public/netease.icns"
        }
      }
    }
  }
  // ...other config
};
module.exports = config;
