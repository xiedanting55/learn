'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/jspang', controller.home.jspang);
  router.get('/my', controller.jspang.index);
};
