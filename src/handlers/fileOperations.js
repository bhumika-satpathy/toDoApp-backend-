const uuid = require('uuid/v4');
const operation = require('../utils/readWriteFiles.js');

const getHandler = async (request, h) => {
  const readData = await operation.readJson();
  return h.response(readData);
};

module.exports={getHandler};