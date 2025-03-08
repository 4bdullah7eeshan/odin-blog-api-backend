const { body } = require("express-validator");
const recordExists = require("./prismaHelpers");

const notEmpty = (fieldName, customMessage) =>
    body(fieldName)
        .trim()
        .notEmpty()
        .withMessage(customMessage || `${fieldName} cannot be empty`);


const hasLength = (fieldName, min, max, customMessage) =>
    body(fieldName)
        .isLength({ min, max })
        .withMessage(customMessage || `${fieldName} must be between ${min} and ${max} characters`);

                
module.exports = {
    notEmpty,
    hasLength,
    isUnique,
}
