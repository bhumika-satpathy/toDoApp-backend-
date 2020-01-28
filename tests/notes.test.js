const handlers = require('../src/handlers/fileOperations');
const readWriteFiles = require('../src/utils/readWriteFiles');
const axios = require('axios').default;

describe('The get handler function ', () => {
  it('should invoke the readFile method', () => {
    const mockH = {
      response: () => {},
    };
    const mockRead = jest.spyOn(readWriteFiles, 'readJson');
    handlers.getHandler(null, mockH);
    expect(mockRead).toHaveBeenCalled();
  });
});

describe('The post handler function ',()=>{
    it('should invoke the writeFile method',async()=>{
        const mockH={
            response:(res)=>{}
        }
        const mockReq={
            payload:{
                title:"one",
                description:"More Work"
            }
        }
        const mockWrite=jest.spyOn(readWriteFiles,'writeJson');
        await handlers.postHandler(mockReq,mockH);
        expect(mockWrite).toHaveBeenCalled();
    })
})

describe('The delete handler function',()=>{
    it('should invoke the writeJson method',async(done)=>{
        const mockH={
            response:(res)=>{}
        }
        const mockReq={
            params:{
                id:'69bdeb20-596e-4abd-985b-82dff67696f6'
            }
        }
        const mockWrite=jest.fn(readWriteFiles,'writeJson');
        await handlers.deleteHandler(mockReq,mockH);
        expect(mockWrite).toHaveBeenCalled();
        done();
    })
})

describe('The change state handler ', () =>{
    it('Should call writeJson', async (done) => {
      const mockReq = {
        params: {
          id: '69bdeb20-596e-4abd-985b-82dff67696f6',
        },
      };
      const mockH = {
        response: (res) => {},
      };
      const mockWrite = jest.spyOn(readWriteFiles, 'writeJson');
      await handlers.postHandler(mockReq, mockH);
      expect(mockWrite).toHaveBeenCalled();
      done();
    });
  });

  describe('The get quotes handler', () => {
    it('should return an object', () => {
      const result = handlers.getQuotesHandler();
      expect(result).toBeInstanceOf(Object);
    });
    it('should call axiom.get', (done) => {
      const mockRandom = jest.spyOn(axios, 'get');
      handlers.getQuotesHandler();
      expect(mockRandom).toHaveBeenCalled();
      done();
    });
  });