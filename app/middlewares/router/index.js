const koaRouter = require('koa-router')
const router = new koaRouter()
const { graphiqlKoa, graphqlKoa } = require('graphql-server-koa');
const graphQLSchema = require('../../graphQLSchema')
const koaBody = require('koa-bodyparser')
const services = require('./services')

module.exports = function(app) {
  router.get('/', services.index);

  router.post('/graphql', koaBody(), graphqlKoa({ schema: graphQLSchema }));
  router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

  app.use(router.routes())
  app.use(router.allowedMethods())
}
