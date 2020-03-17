'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.index);
  router.get('/user/list/:type', controller.user.list);
  router.post('/user/add/:type', controller.user.add);
  router.post('/login', controller.login.login);
};
