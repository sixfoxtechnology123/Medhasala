const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  examCategory: { 
    type: String, 
    enum: ['SSC', 'GATE', 'NEET', 'UPSC', 'RAILWAYS', 'BANKING'], 
    required: true 
  },
  resourceType: { 
    type: String, 
    enum: ['Syllabus', 'Notes', 'Video', 'PrevPaper'], 
    required: true 
  },
  title: { type: String, required: true },
  description: String,
  fileUrl: String, // Link to PDF/Notes
  videoUrl: String, // YouTube Link if resourceType is Video
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', ResourceSchema);