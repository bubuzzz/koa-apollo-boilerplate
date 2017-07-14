const koa = require('koa');
const koaBody = require('koa-bodyparser');
const app = new koa();

// context
app.context.dbModels = require('./db')

// middlewares
require('./middlewares')(app)
app.use(koaBody());

const PORT = 3000;
app.listen(PORT);
