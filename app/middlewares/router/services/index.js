const index = async(ctx, next) => {
  ctx.body = { data: '123', result: "test" }
  await next()
}

module.exports = {
  index
}
