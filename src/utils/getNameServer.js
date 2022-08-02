export default ctx => {
  return ctx.req ? 'http://localhost:5000' : '';
};
