'use strict';
const Controller = require('./base_controller');
const Page  = require("../dto/Page")
class LoginController extends Controller {
  async login() {
    const {ctx, service} = this;
    const params = ctx.request.body;
    const res = await service.login.login(params);
    if (!res) {
      return ctx.body={
        success: false,
        msg: '账号或密码错误'
      }
    } else {
      let result = res.phone_id + res.password;
      ctx.cookies.set('token', result);
      ctx.session.token = result;
      this.success(res);
    }
  }
}

module.exports = LoginController;
