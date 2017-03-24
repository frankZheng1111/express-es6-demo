# express-es6-demo
主要用给自己来巩固一下node一些基本的库和基本的实现

### 环境依赖
- node v5.1.1

### 用法
  在项目根目录下
  ```
  npm install
  ```
  或者有安装cnpm的话:
  ```
  cnpm install
  ```
### 运行

1. 在项目根目录下
    - 开发环境
    ```
    npm start
    ```
    - 产品环境
    ```
    npm run build
    npm run server
    ```

2. 访问地址[localhost:3000](http://localhost:3000)

### 单元测试
  在项目根目录下
  ```
  npm test
  ```

### 部分库的及设定的说明

1. [babel-cli](https://babeljs.io/docs/usage/cli/): Babel提供babel-cli工具，用于命令行转码。
2. 转码规则的设定:
  ``` json
  "babel": {
    "presets": [
      "es2015",
      "stage-2"
    ],
    "plugins": []
  }
  ```
3. babel-preset-es2015: ES2015转码规则集
4. babel-preset-stage-2: ES7不同阶段语法提案的转码规则（共有4个阶段, 0, 1, 2, 3, 选一个装）
5. babel-register: 安装后，当使用require加载.js、.jsx、.es和.es6后缀名的文件前自动用Babel进行转码。
6. [chai](http://chaijs.com/): 断言框架
7. [mocha](https://mochajs.org/): 单元测试工具
8. nodemon: 监控代码变化自动重启server
9. [express](https://expressjs.com/): web应用框架 
