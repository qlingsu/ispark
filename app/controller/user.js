'use strict';
const Controller = require('./base_controller');
const Page  = require("../dto/Page")
class UserController extends Controller {
  async list() {
    const ctx = this.ctx;
    const type = ctx.params.type;
    const user = await ctx.service.user.list(type);
    const query = ctx.request.query;

    console.log(ctx.session);
    let token = ctx.cookies.get("token");
    if(ctx.session.token == token){

    }else{
      (page);
    }

    let pageSize = query.pageSize;
    let pageNum = query.pageNum;
    console.log("query=",query);
    let page = new Page(pageSize,pageNum,user);
    this.success(page);
  }
  async add(type) {
    const ctx = this.ctx;
    const query = ctx.request.body;
    const success = await ctx.service.user.add(type,query);
    if(success)
    this.success();
  }
}

module.exports = UserController;
