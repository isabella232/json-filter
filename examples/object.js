
/**
 * Module dependencies.
 */

var koa = require('koa');
var filter = require('..');

var app = koa();

app.use(filter());

app.use(function *(){
  this.body = {
    name: 'tobi',
    email: 'tobi@segment.io',
    packages: 5,
    friends: ['abby', 'loki', 'jane']
  }
});

app.listen(3000);
console.log('app listening on port 3000');