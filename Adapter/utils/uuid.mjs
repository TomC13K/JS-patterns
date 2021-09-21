
import {v4} from "uuid"           //import work from node 14 in files .mjs

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
export default uuidInstance;          // export default is for ES6 module instead of module.exports =
