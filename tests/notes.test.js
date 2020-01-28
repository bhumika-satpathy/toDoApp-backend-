const handlers = require('../../src/handlers/fileOperations');
const readWriteFiles = require('../../src/utils/readWriteFiles');

describe('The handler function ', () => {
  it('should invoke the readFile method', () => {
    const mockH = {
      response: () => {},
    };
    const mockRead = jest.spyOn(readWriteFiles, 'readJson');
    handlers.getHandler(null, mockH);
    expect(mockRead).toHaveBeenCalled();
  });
});