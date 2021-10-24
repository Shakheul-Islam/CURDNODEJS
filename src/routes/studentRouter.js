const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/students", studentController.getStudents);
router.get("/students/:id", studentController.getStudent);
router.post("/students", studentController.saveStudent);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
