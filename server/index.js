const Koa = require('koa')
const views = require('koa-views')
const cors = require('koa2-cors');
const { resolve } = require('path')
const app = new Koa()

app.use(cors())

app.use(views(resolve(__dirname,'./views'), {
  extension: 'pug'
}))
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'world',
    me: 'xiaobing'
  })
})
app.listen(3000)