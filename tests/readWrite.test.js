const {readJson, writeJson} = require('../src/Utils/readWriteFiles');
const fs = require('promise-fs');

xdescribe('The read json function', () => {
  it('Should call the fs.readFile function', (done) => {
    const spiedOn = jest.spyOn(fs, 'readFile');
    readJson();
    expect(spiedOn).toHaveBeenCalledWith('./resources/notes.json');
    done();
  });
});
xdescribe('The write json function', () =>{
  it('Should call the fs.writeFile function', (done) => {
    const spiedOn = jest.spyOn(fs, 'writeFile');
    writeJson();
    expect(spiedOn).toHaveBeenCalledWith('./resources/notes.json', undefined);
    done();
  });
});