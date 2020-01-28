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

const deleteHandler=async(req,h)=>{
  try{
    const notesJson=await operation.readJson();
    const deleteId=req.params.id;
    notesJson.notes=notesJson.notes.filter((note)=>note.id!==deleteId)
    operation.writeJson(JSON.stringify(notesJson));
    return h.response('Note Deleted!')
  }catch(err){
    return h.response(err.message);
  }
}

module.exports={getHandler,postHandler, deleteHandler};