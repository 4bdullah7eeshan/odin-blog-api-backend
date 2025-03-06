// This means that client-side input fails validation.
class CustomBadRequestError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 400;
      this.name = "BadRequestError";
    }
}
  
module.exports = CustomBadRequestError;
  