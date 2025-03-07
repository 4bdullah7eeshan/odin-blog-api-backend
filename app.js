const express = require("express");
const cors = require("cors");
const apicache = require("apicache");

const { PORT } = require("./config/index");
const { userRouter, postRouter } = require("./routes/index.js");

const app = express();
let cache = apicache.middleware;


app.use(cors()); // Insert options later when deploying
app.use(cache('5 minutes'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/v1/users", userRouter);
app.use("/v1/posts", postRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({ "errorCode": err.statusCode || 500, "errorMessage": err.message});
});
  
app.listen(PORT, () => {
    console.log(`Express server listening on PORT: ${PORT}...`)
});