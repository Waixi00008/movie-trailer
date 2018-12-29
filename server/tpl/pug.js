module.exports = `
doctype html
html
  head
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1.0')
    title('Koa Server Html')
    link(href='https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.min.css' rel='stylesheet')
    script(src='https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js')
    script(src='https://cdn.bootcss.com/twitter-bootstrap/4.2.1/js/bootstrap.bundle.min.js')
  body
    .container
      .row
        .col-md-8
          h1 hello #{you}
          p my name is #{me}
        .col-md-4
          p 测试pug动态模板引擎
`