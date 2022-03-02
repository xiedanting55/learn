'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg1';
  }

  async jspang() {
    const { ctx } = this;
    ctx.body = '<h1>Hello JSPang</h1>';
  }
}

module.exports = HomeController;
