// 从 egg 上获取（推荐）
const Service = require('egg').Service;
class UserService extends Service {
  // implement
  async list(type) {
    const userList = await this.app.mysql.select(type);
    return userList;
  }
  async add(type,query) {
    console.log(query)
    query.create_time = new Date(query.create_time);
    const result = await this.app.mysql.insert(type, query);
    console.log(result)
    return true;
  }
}
module.exports = UserService;