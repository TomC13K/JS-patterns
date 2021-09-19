
const {v4} = require("uuid");

//custom abstraction for uuid
class Uuid {
  
  //class not using THIS. so can be static
  static generate() {
    //in here can update later to other version uudiv5  v1 
    //or write any other logic or functionality as needed
    return v4();
  }
}

const uuidInstance = new Uuid();
module.exports = uuidInstance;
//export default new uuid();
//module.exports = new Uuid();