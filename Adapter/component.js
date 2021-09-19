
const uuidInstance = require("./utils/uuid");

class Component {
  constructor() {
    this.componentUniqueId = uuidInstance.constructor.generate();
  }

  //class cannont be static because its using THIS.
  getComponentId() {
    return this.componentUniqueId;
  }
}

const componentInstance = new Component();
module.exports = componentInstance;
//export default new Component();
//module.exports.component = new Component();
