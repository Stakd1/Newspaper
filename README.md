# Newspaper
Vue新闻资讯类应用

# 配置Vant

>- 安装vant: npm i vant -S
>- 按需引入: npm i babel-plugin-import -D

```javascript
//在babel.config.js写入以下内容
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```

>- 配置rem: npm i postcss-pxtorem lib-flexible -D
```javascript
//在postcss.config.js写入以下内容
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```