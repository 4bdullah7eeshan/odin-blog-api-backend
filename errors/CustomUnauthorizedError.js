// This means the user isn't not authorized to access a resource.
// It usually returns when the user isn't authenticated.
class CustomUnauthorizedError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 401;
      this.name = "UnauthorizedError";
    }
}
  
module.exports = CustomUnauthorizedError;
  