// This means that client-side input fails validation.
class CustomBadRequestError extends Error {
    constructor(message, errors = []) {
      super(message);
      this.statusCode = 400;
      this.name = "BadRequestError";
      this.errors = errors;
    }
}
  
module.exports = CustomBadRequestError;
  