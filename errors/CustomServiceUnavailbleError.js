// This indicates that something unexpected happened on server side
// (It can be anything like server overload, some parts of the system failed, etc.).
class CustomServiceUnavailableError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 503;
      this.name = "ServiceUnavailableError";
    }
}
  
module.exports = CustomServiceUnavailableError;
  