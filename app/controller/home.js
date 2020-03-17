'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' }
      ]
    };
    ctx.body = dataList;
  }
  async info() {
    const { ctx } = this;
    ctx.body = {
      name: `home ${ctx.params.id}`,
    };
  }
}

module.exports = HomeController;
