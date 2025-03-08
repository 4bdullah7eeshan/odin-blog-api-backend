const asyncHandler = require("express-async-handler");
const { prismaClient } = require("../prisma/client");

const recordExists = asyncHandler(async (modelName, fieldName, fieldValue) => {
    const record = await prisma[model].findUnique({
        where: {
            [fieldName]: fieldValue,
        },
    });

    return !!record;
});

const checkPasswordMatch = asyncHandler(async (modelName, correctPassword, enteredPassword) => {
    const 
})

module.exports = recordExists;