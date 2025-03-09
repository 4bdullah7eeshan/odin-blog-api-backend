const app = require("./app.js");

if (NODE_ENV != "test") {
    app.listen(PORT, () => {
        console.log(`Express server listening on PORT: ${PORT}...`)
    });
}