const Koa = require('koa');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const app = new Koa();

// 导入和设置Nuxt.js选项
let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

async function start() {
  // 实例化nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  //构建开发环境
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200;
    // 绕过Koa的内置响应处理
    ctx.respond = false;
    ctx.req.ctx = ctx;
    nuxt.render(ctx.req, ctx.res);
  });

  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start();
