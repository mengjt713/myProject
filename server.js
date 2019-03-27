//引入express
const express = require('express');

const bodyParser = require('body-parser');

//定义cruise对象
const cruise = express();

//引入原生模块path
const path = require('path');

//引入自定义文件类型模块
const mime = require('./server/mime');

//入口文件
const entryHTML = '/client/global/index.html';

//請求代理
const request = require('superagent');

//basepath
const basepath = '/cruise';

//标记action
const actionFlag = basepath + '/action/*';

//action分流
const actionDispatch = './server/actionDispatch';

const setting = {
    port: 3000,
    version: '1.0.0',
    enviroment: 'DEV',
    proxyIp: 'localhost',
    desc: '当前所有静态资源以及接口均由node解析并返回客户端'
}

// const setting={
//     port:8080,
//     version:'1.0.0',
//     enviroment:'UNITE',
//     proxyIp:'http://',
//     desc:'当前当前所有静态资源由node解析并返回客户端，接口数据由java解析'
// }

//设置中间件进行静态资源的本地读取并返回给客户端,包含html,js,css,img
//use默认路径从根节点开始,这里设置虚拟访问目录为'/static'开头

cruise.use('/client', express.static(__dirname + '/client'));


//设置entryHTML为首页
cruise.use(basepath, express.static(__dirname, {
    index: entryHTML
}));

// for parsing application/json
cruise.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
cruise.use(bodyParser.urlencoded({extended: true}));


//action类的请求分流
const dispatchAction = function (basepath) {

    let next;

    //判断当前开发环境，如果为UNITE,反向代理到后台java环境
    if (setting.enviroment == 'DEV') {
        next = function (req, res) {
            let action = require(actionDispatch);
            action.dispatch(req, res, basepath);
        }

    }

    if (setting.enviroment == 'UNITE') {
        next = function (req, res) {
            const method = req.method.toLowerCase();
            const sreq = request[method](setting.proxyIp + req.originalUrl);
            if (method === 'post' || method === 'put') {
                sreq.set('Content-Type', 'application/json')
                    .send(req.body)
            }
            sreq.pipe(res);
        }

    }

    cruise.use(actionFlag, next);
}

dispatchAction(basepath);


cruise.listen(setting.port, () => {
    console.log('服务器启动成功，请访问localhost:'+setting.port+basepath);
    console.log(setting.desc)
})