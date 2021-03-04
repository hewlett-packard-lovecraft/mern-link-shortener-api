"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.sendFile("/home/haoming/njs-projects/shortener-api/media/index.html");
});
exports.default = router;
