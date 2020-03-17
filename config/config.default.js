/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // jsonp: {
    //   csrf: false
    // },
    //cookies模式，这个是官网写的一个模式，不知道为啥选这个模式
    cookies: {
      sameSite: 'lax',
    },
    security : {
      csrf : {
        headerName: 'x-csrf-token',// 自定义请求头
      }
    },

    //数据库配置信息
    mysql : {
      // 单数据库信息配置
      client: {
        // host
        host: '192.168.180.10',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123456',
        // 数据库名
        database: 'spark',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584087489738_2454';

  // add your middleware config here
  //中间件配置
  config.middleware = [ 'authLogin' ];
  config.authLogin = {
    // 不需要登录的页面，白名单URL
    whiteUrls: ['/login'], // 是使用url的前缀匹配的   
    // 也可以使用
    // ignore: ['/login', '/register', '/doLogin', '/doRegister']
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
