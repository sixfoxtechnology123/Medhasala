const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'teacher', 'student'], default: 'student' },
  // For Private Students
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  // For Teachers (The code they give to students)
  ownAccessCode: { type: String, unique: true, sparse: true } 
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);