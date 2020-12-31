NodeJS 前端最主流JavaScript运行环境

## 1. 什么是NodeJS
1. Node.js是一个基于Chrome V8引擎的JavaScript运行环境
2. Node.js使用了一个事件驱动，非阻塞式I/O模型，使其轻量又高效
3. Node.js的包管理器npm是全球最大的开源库生态系统

## 2. NodeJS为什么这么火
1. 使用JavaScript
2. 速度非常快(V8引擎 & non-block)
3. Node.js的包管理器npm是全球最大的开源库生态系统

## 3. 将会学到的知识点
1. 学习NodeJS的工作原理，例如 V8引擎/模块/事件队列/文件系统
2. 搭建服务器(Express/路由/Template模块)
3. 实战项目(TodoApp)

## 4. 需要掌握的知识点
1. HTML+CSS
2. JavaScript
3. Command Line

## 5. JavaScript引擎
1. 电脑根本不识别也不理解JavaScript
2. JavaScript引擎起到的作用就是让电脑识别JS代码

## 6. V8引擎
1. Node.js是使用C++写的
2. V8引擎是Node.js的核心
3. V8引擎的作用就是让JS代码能够让电脑识别

## 7. 什么是模块
在Node.js中，文件和模块是一一对应的(每个文件被视为一个独立的模块)

## 8. 什么是事件模块
1. 大多数Node.js核心API都是采用惯用的异步事件驱动架构(fs/http)
2. 所有能触发事件的对象都是EventEmitter类的实例
3. 事件流程：引入模块->创建EventEmitter对象->注册事件->触发事件

## 9. 什么是文件系统
1. 读取文件(fs.readFile)
2. 写入文件(fs.writeFile)
3. 流程：引入fs模块->调用方法->异常捕获

## 10. 文件系统操作
1. 创建文件(fs.mkdir)
2. 删除文件夹(fs.rmdir)
3. 删除文件(fs.unlink)
4. 流程：引入fs模块->调用方法->异常捕获

## 11. 服务器(client)与客户端(server)
            request
1. client------------->server
            response
2. client<-------------server

## 12. 缓存区(Buffer) 可以在TCP流和文件系统操作等场景中处理二进制数据流

## 13. 流(Stream) 在Node.js中是处理流数据的抽象接口

## 14. 读取HTML文件 读取HTML文件并展示到页面中

## 15. 读取JSON文件 读取JSON数据并展示到页面中

## 16. 什么是NPM(Node Package Manager)
1. NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题

## 17. NPM的应用
1. 允许用户从NPM服务器下载别人编写的第三方包到本地使用
2. 允许用户从NPM服务器下载别人并安装别人编写的命令行程序到本地使用
3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用

## 18. 什么是package(Node package manager)
1. package用于定义项目中所需要的各种模块，以及项目的配置信息(比如名称，版本，许可证等原数据)

## 19. 什么是Express(Express框架)
1. 基于NodeJS平台，快速，开放，极简的Web开发框架

## 20. 什么是nodemon
1. 在开发环境下，往往需要一个工具来自动重启项目工程，我们可以借助nodemon来代替node进行启动

## 21. Express能做什么
1. 已经封装好服务器
2. 已经封装好路由
3. 已经封装好中间件
4. 已经封装好网络请求...

## 22. Express怎么做？
1. NPM安装Express框架
2. 引入Express模块
3. 实例化Express的对象
4. 通过对象进行调用各种方法

## 23. EJS模板引擎
1. 快速编译和渲染
2. 简单的模板标签
3. 支持浏览器端和服务器端
4. 支持express试图系统

## 24. 实施计划(公共模板)
1. 使用EJS替代HTML
2. 创建导航(公共模板)
3. 解决外部样式不可用的问题

## 25. 实施计划(TodoApp)
1. 启动新的项目
2. 初始化package
3. 安装express框架
4. 安装ejs body-parser模块