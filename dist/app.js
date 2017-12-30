'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.json({ works: 1 });
});
app.listen(3000, () => {
    console.log('Server started: sscce ');
});
exports.default = app;
//# sourceMappingURL=app.js.map