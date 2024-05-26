const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/uniwork', { useNewUrlParser: true, useUnifiedTopology: true });

const uploadSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  category: String,
  filePath: String,
  token: String
});

const Upload = mongoose.model('Upload', uploadSchema);

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('file');

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|mp4|avi|mov|mkv/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images and Videos Only!');
  }
}

app.use(express.static('public'));
app.use(express.json());

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ error: 'No file selected' });
      } else {
        const { name, title, description, category } = req.body;
        const token = generateToken(name);
        const newUpload = new Upload({
          name,
          title,
          description,
          category,
          filePath: req.file.path,
          token
        });

        newUpload.save()
          .then(() => res.json({ success: true, token }))
          .catch(err => res.status(400).json({ error: err }));
      }
    }
  });
});

function generateToken(name) {
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 6);
  return `${name}-${timestamp}-${randomString}`;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
