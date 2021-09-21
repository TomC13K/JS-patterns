import uuidInstance from "./utils/uuid.mjs"

class Component {
  constructor() {
    this.componentUniqueId = uuidInstance.constructor.generate();
  }

  //class cannont be static because its using THIS.
  getComponentId() {
    return this.componentUniqueId;
  }
}

// exporting the ready instance of the class
const componentInstance = new Component();
export default componentInstance;

