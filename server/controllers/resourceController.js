const Resource = require('../models/Resource');

// Admin Uploads Syllabus/Notes/Video
exports.addResource = async (req, res) => {
  try {
    const { examCategory, resourceType, title, description, fileUrl, videoUrl } = req.body;
    
    const newResource = new Resource({
      examCategory,
      resourceType,
      title,
      description,
      fileUrl,
      videoUrl
    });

    await newResource.save();
    res.status(201).json({ msg: "Resource published successfully", newResource });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Students Fetch Resources (Filtered by Hub like SSC, UPSC)
exports.getResources = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { examCategory: category } : {};
    const resources = await Resource.find(filter).sort({ createdAt: -1 });
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};