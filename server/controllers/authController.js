const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password, role, accessCode } = req.body;
  try {
    let teacherId = null;

    if (role === 'student' && accessCode) {
      const teacher = await User.findOne({ ownAccessCode: accessCode });
      if (!teacher) return res.status(400).json({ msg: "Invalid Access Code" });
      teacherId = teacher._id;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ 
      name, email, password: hashedPassword, role, teacherId,
      ownAccessCode: role === 'teacher' ? Math.random().toString(36).substring(7).toUpperCase() : null
    });

    await user.save();
    res.status(201).json({ msg: "Registered successfully" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
  const token = jwt.sign({ id: user._id, role: user.role, teacherId: user.teacherId }, process.env.JWT_SECRET);
  res.json({ token, user: { name: user.name, role: user.role, teacherId: user.teacherId } });
};