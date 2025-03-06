const express = require("express");
const cors = require("cors");
const apicache = require("apicache");

const { PORT } = require("./config/index");
const prismaClient = require("./prisma/client");

const { userRouter, postRouter, commentRouter } = require("./routes/index.js");

const app = express();
let cache = apicache.middleware;


app.use(cors()); // Insert options later when deploying
app.use(cache('5 minutes'));
app.use(express.urlencoded({ extended: true }));


app.use("/v1/users", userRouter);
app.use("/v1/posts", postRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});
  
app.listen(PORT, () => {
    console.log(`Express server listening on PORT: ${PORT}...`)
});

// Graceful shutdown handling. Modularize these later into its own files
process.on('SIGINT', async () => {
    console.log('SIGINT received - closing server');
    await prismaClient.$disconnect();
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGTERM', async () => {
    console.log('SIGTERM received - closing server');
    await prismaClient.$disconnect();
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});