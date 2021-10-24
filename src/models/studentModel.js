const Mongoose = require("mongoose");

const StudentSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    department: {
      type: String,
      required: [true, "Department name is required"],
    },
  },
  { timestamps: true }
);

const Student = Mongoose.model("Student", StudentSchema);
module.exports = Student;
