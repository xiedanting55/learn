NodeJS 前端最主流JavaScript运行环境

1. 什么是NodeJS
1)Node.js是一个基于Chrome V8引擎的JavaScript运行环境
2)Node.js使用了一个事件驱动，非阻塞式I/O模型，使其轻量又高效
3)Node.js的包管理器npm是全球最大的开源库生态系统

2. NodeJS为什么这么火
1)使用JavaScript
2)速度非常快(V8引擎 & non-block)
3)Node.js的包管理器npm是全球最大的开源库生态系统

3. 将会学到的知识点
1)学习NodeJS的工作原理，例如 V8引擎/模块/事件队列/文件系统
2)搭建服务器(Express/路由/Template模块)
3)实战项目(TodoApp)

4. 需要掌握的知识点
1)HTML+CSS
2)JavaScript
3)Command Line

5. JavaScript引擎
1)电脑根本不识别也不理解JavaScript
2)JavaScript引擎起到的作用就是让电脑识别JS代码

6. V8引擎
1)Node.js是使用C++写的
2)V8引擎是Node.js的核心
3)V8引擎的作用就是让JS代码能够让电脑识别

7. 什么是模块
在Node.js中，文件和模块是一一对应的(每个文件被视为一个独立的模块)

8. 什么是事件模块
1)大多数Node.js核心API都是采用惯用的异步事件驱动架构(fs/http)
2)所有能触发事件的对象都是EventEmitter类的实例
3)事件流程：引入模块->创建EventEmitter对象->注册事件->触发事件

9. 什么是文件系统
1)读取文件(fs.readFile)
2)写入文件(fs.writeFile)
3)流程：引入fs模块->调用方法->异常捕获

10. 文件系统操作
1)创建文件(fs.mkdir)
2)删除文件夹(fs.rmdir)
3)删除文件(fs.unlink)
4)流程：引入fs模块->调用方法->异常捕获
