const fs = require('promise-fs');


const readJson = async () => {
  try {
    const rawData = await fs.readFile('./resources/notes.json');
    return JSON.parse(rawData);
  } catch (err) {
    console.log(err);
  }
};

const writeJson = async (args) => {
  fs.writeFile('./resources/notes.json', args);
};

module.exports = { readJson, writeJson };
