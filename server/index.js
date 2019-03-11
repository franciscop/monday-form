const server = require('server');

server(3001, () => {
  console.log('REQUESTED!');
  return ({
    hello: 'world'
  })
});
