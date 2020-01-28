const { getHandler} = require('../handlers/fileOperations');

const routesArr = [{ method: 'GET', path: '/notes', handler: getHandler },
  //{ method: 'POST', path: '/notes', handler: postHandler },
  //{ method: 'DELETE', path: '/notes/id', handler: deleteNotesHandler },
];

module.exports = routesArr;
