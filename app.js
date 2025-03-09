const express = require("express");
const cors = require("cors");
const apicache = require("apicache");

const { userRouter, postRouter } = require("./routes/index.js");
const CustomNotFoundError = require("./errors/CustomNotFoundError");

const app = express();
let cache = apicache.middleware;


app.use(cors()); // Insert options later when deploying
app.use(cache('5 minutes'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/v1/users", userRouter);
app.use("/v1/posts", postRouter);

// Catch-all for 404 (NOT FOUND) errors
app.use((req, res, next) => {
    next(new CustomNotFoundError("Endpoint not found")); // should use like this since no asynchandler
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({ "errorCode": err.statusCode || 500, "errorMessage": err.message});
});

module.exports = app;