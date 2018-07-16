# parcel-vue
零配置VUE开发模板，基于Parcel全新构建

[传送门：Parcel-VUE官网文档](http://parcel.xserver.top)

> 使用说明

```bash
请使用Node版本 >= 9.10
```

```bash
$ npm install xserver-cli -g

$ x-cli parcel-vue myproject
```

> 开发调试
```bash
$ npm run dev
```

> 正式构建
```bash
$ npm run build
```

>目录结构
```js
├── dist                构建结果
├── index.html          首页文件
├── node_modules
├── package.json
├── src                 开发源码
│   ├── App.vue			单页组件入口
│   ├── assets			需要编译构建的静态资源
│   ├── components		组件集合
│   ├── main.js			入口JS
│   └── router			路由控制
└── static              静态文件
    ├── css
    ├── img
    └── js
```

更新日志
>
	2018.01.28:更新iview至2.9.0版本
	2018.03.31:更新pacel至1.7.0版本，原生支持VUE构建，进一步精简配置，完全零配置
	2018.06.15:更新pacel至1.9.0版本，大量BUG修正和新特性加入，详情查看parcel官方版本日志，同时更新iview至2.14.2版本
	2018.06.25:更新pacel至1.9.3版本，在CentOS 7中仍旧存在构建问题
	2018.07.16:更新pacel至1.9.7版本

已知问题
>
	构建环境，nodejs 10.4.1
	在MacOS 10.13.5中构建，正常
	测试在CentOS 7中构建，会出现/usr/local/node/parcel-vue/src/router/index.js: Cannot read property 'process' of undefined的错误
	两个操作系统环境的node版本一致，唯一区别是NODE_ENV的设置不同，但不确定是否由该原因引起
	该问题需要进一步跟进parcel官方issue，暂时的解决方案可以退回使用parcel 1.7.0版本
	相关问题issue https://github.com/parcel-bundler/parcel/issues/1548
	
帮助联系
>
	作者:cheneyxu
	邮箱:457299596@qq.com
	QQ:457299596
