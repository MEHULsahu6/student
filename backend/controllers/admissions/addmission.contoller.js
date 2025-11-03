const Student = require('../../models/student.js');

const addmission = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Student admission successful"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while adding student", error: error.message });
  }
};

module.exports = { addmission };
