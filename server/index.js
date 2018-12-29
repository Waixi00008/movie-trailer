const Koa = require('koa')
const ejs = require('ejs')
const pug = require('pug')
const app = new Koa()
const {
  htmlTpl,
  ejsTpl,
  pugTpl
} = require('./tpl/index.js')
app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  // ctx.body = htmlTpl
  
  // ctx.body = ejs.render(ejsTpl, {
  //   you: 'world',
  //   me: 'xiaobing'
  // })
  
  ctx.body = pug.render(pugTpl, {
    you: 'world',
    me: 'xiaobing'
  })
})
app.listen(3000)