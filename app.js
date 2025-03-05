const express = require("express");

const { PORT } = require("./config/index");
const prismaClient = require("./prisma/client");

const app = express();

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