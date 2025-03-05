const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Express server listening on PORT: ${PORT}...`)
});