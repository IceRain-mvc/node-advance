'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
     let {ctx} = this;
     
     ctx.body = 'hello eggjs'
  }
}

module.exports = HomeController;
