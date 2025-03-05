const dotenv = require("dotenv");
const path = require('path');

const result = dotenv.config({
    path: path.resolve(__dirname, '..', '.env'),
});

if (result.error) {
    throw result.error
}

module.exports = {
    PORT: process.env.PORT || 3000,
};
