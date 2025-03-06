// This is a generic server error. It probably shouldn't be thrown explicitly.
class CustomInternalServerError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 500;
      this.name = "InternalServerError";
    }
}
  
module.exports = CustomInternalServerError;
  