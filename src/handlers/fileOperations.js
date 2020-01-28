const uuid = require('uuid/v4');
const operation = require('../utils/readWriteFiles.js');
const axios=require('axios').default

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

const changeStateHandler = async (request, h) => {
  try {
    const notesJson = await operation.readJson();
    const noteId = request.params.id;
    let id = 0;
    notesJson.notes.forEach((element) => {
      if (element.id === noteId) {
        notesJson.notes[id].active = !notesJson.notes[id].active;
        return;
      }
      id += 1;
    });
    operation.writeJson(JSON.stringify(notesJson));
    return h.response('State changed');
  } catch (err) {
    return h.response(err.message);
  }
};

const getQuotesHandler=async(req,h)=>{
  const jsonResponse=await axios.get('http://api.quotable.io/random');
  const jsonData=jsonResponse.data;
  return `${jsonData.content} By ${jsonData.author}`;
}

module.exports={getHandler,postHandler, deleteHandler, changeStateHandler,getQuotesHandler};