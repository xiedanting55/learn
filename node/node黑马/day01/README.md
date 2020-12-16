https://www.bilibili.com/video/BV1Ns411N7HU?p=9

### 为什么要学习 Node.js

- 企业需求
  - 具有服务端开发经验更好
  - front-end
  - black-end
  - 全栈工程师
    - 全干
  - 基本的网站开发能力
    - 服务端
    - 前端
    - 运维部署
  - 多人社区（项目）

### Node 是什么

· Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
。Node.js 不是一门语言
。Node.js 不是库,不是框架
。Node.js 是一个 JavaScript 运行环境
。简单点就是 Node.js 可以解析和执行 JavaScript 代码
。以前只有浏览器可以解析执行 JavsScript 代码
。也就是说现在的 JavaScript 可以完全脱离浏览器来运行，一切都归功于：Node.js
· 浏览器中的 JavaScript
。ECMAScript - 基本语法 - if - var - function - Object - Array
。BOM
。DOM
· Node.js 中的 JavaScript
。没有 BOM,DOM
。在 Node 这个 JavaScript 执行环境中为 JavaScript 提供了一些服务器级别的操作 API - 例如文件读写 - 网络服务的构建 - 网络通信 - htpp 服务器 - 等处理。。。
· 构建与 Chrome 的 V8 引擎之上
。代码只是具有特定格式的字符串而已
。引擎可以认识它，引擎可以帮你去解析和执行
。Google Chrome 的 V8 引擎是目前公认的解析执行 JavaScript 代码最快的
。Node.js 的作者把 Google Chrome 的 V8 引擎移植了出来，开发了一个独立的 JavaScript 运行时环境
· Node.js uses an event-driven,non-blocking I/O model that makes lightweight and efficient
。event-driven 事件驱动
。non-blocking I/O 非阻塞 IO 模型(异步)
。lightweight and efficient 轻量和高效
· Node.js package ecosystem,npm,is the largest ecosystem of open source libraries in the world
。npm 是世界上最大的开源库生态系统
。绝大多数 JavaScript 相关的包都放在了 npm 上，目的是为了让开发人员更方便的去下载使用
。 `npm insatll jquery`

### Node.js 能做什么

· Web 服务器后台
· 命令行工具
。npm
。git(C 语言)
。hexo(node)
。。。。’
· 对于前端开发工程师来讲，接触 node 最多的是它的命令行工具
。自己写的很少，主要是使用别人第三方的
。webpack
。gulp
。npm

### 核心模块

Node 为 JavaScript 提供了很多服务器级别的 API，这些 API 绝大多数都被包装到了一个具名的核心模块中
例如：文件操作的 fs 核心模块，http 服务构建的 http 模块，path 路径操作模块，os 操作系统模块。。。
var fs = require('fs');
var http = require('http');
