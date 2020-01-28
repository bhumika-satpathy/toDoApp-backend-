const uuid = require('uuid/v4');
const operation = require('../utils/readWriteFiles.js');

const getHandler = async (request, h) => {
  const readData = await operation.readJson();
  return h.response(readData);
};

const postHandler = async (request, h) => {
  try {
    const existingNotes = await operation.readJson();
    const note = request.payload;

    note.id = uuid();
    note.isActive = 1;

    existingNotes.notes = [...existingNotes.notes, note];
    operation.writeJson(JSON.stringify(existingNotes));
    return h.response('Note Added');
  } catch (err) {
    return h.response(err.message);
  }
};


module.exports={getHandler,postHandler};