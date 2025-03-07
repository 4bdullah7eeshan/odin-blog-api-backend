// This indicates a request conflict with the current state of the target resource.
class CustomConflictError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 409;
      this.name = "ConflictError";
    }
}
  
module.exports = CustomConflictError;
  