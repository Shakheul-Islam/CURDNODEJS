const express = require("express");
const studentRouter = require("./studentRouter");
const router = express.Router();

router.use("/api/v1/sis", studentRouter);

module.exports = router;
