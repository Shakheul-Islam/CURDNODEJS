const Student = require("../models/studentModel");

const getStudents = async (req, res) => {
  const response = await Student.find({});
  return res.status(200).json(response);
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  const response = await Student.findById(id);
  return res.status(200).json(response);
};

const saveStudent = async (req, res) => {
  const student = new Student(req.body);
  const response = await student.save();
  return res.status(201).json(response);
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const response = await Student.findByIdAndDelete(id);
  return res.status(200).json(response);
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const response = await Student.findByIdAndUpdate(id, { $set: req.body });
  return res.status(200).json(response);
};

module.exports = {
  getStudents,
  getStudent,
  saveStudent,
  deleteStudent,
  updateStudent,
};
