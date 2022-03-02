'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>I am  JSPang</h1>';
  }
}

module.exports = JspangController;
