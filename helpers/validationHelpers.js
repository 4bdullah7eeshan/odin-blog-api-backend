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


const isUnique = (fieldName, model, dbField, customMessage) =>
    body(fieldName)
        .custom(async (value) => {
            const exists = await recordExists(model, dbField, value);
            if (exists) {
                return Promise.reject(customMessage || `${fieldName} is already in use`);
            }
            return true;
        });

const doesExists = (fieldName, model, dbField, customMessage) =>
    body(fieldName)
        .custom(async (value) => {
            const exists = await recordExists(model, dbField, value);
            if (!exists) {
                return Promise.reject(customMessage || `${fieldName} does not exist`);
            }
            return true;
        });


                
module.exports = {
    notEmpty,
    hasLength,
    isUnique,
}
