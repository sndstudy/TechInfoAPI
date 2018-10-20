"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
//# sourceMappingURL=main.controller.js.map