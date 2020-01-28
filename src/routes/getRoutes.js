const { getHandler,postHandler,deleteHandler,changeStateHandler, getQuotesHandler} = require('../handlers/fileOperations');

const routesArr = [{ method: 'GET', path: '/notes', handler: getHandler },
  { method: 'POST', path: '/notes', handler: postHandler },
  { method: 'DELETE', path: '/notes/id', handler: deleteHandler },
  {method: 'PUT', path: '/notes/id', handler: changeStateHandler },
  {method: 'GET', path: '/quotes', handler: getQuotesHandler }
];

module.exports = routesArr;
