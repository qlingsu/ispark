// 从 egg 上获取（推荐）
const Service = require('egg').Service;
class LoginService extends Service {
  async login(params) {
    const {ctx} = this;
    try {
        const res = await this.app.mysql.get('account', params);
        return res;
    } catch (err) {
        throw new Error(err);
    }
  }
}
module.exports = LoginService;