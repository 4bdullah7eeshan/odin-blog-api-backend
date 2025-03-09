const { validationResult } = require("express-validator");
const CustomBadRequestError = require("../errors/CustomBadRequestError");

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorList = errors.array().map((error) => ({
            field: error.param,
            message: error.msg,
        }));
        
        return next(new CustomBadRequestError("Validation errors occurred", errorList));
        //throw new CustomBadRequestError("Validation errors occurred", errorList);
    }
    
    next();
};

module.exports = handleValidationErrors;