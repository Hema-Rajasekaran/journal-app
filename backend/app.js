const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const WordSchema = require('./wordDetails'); // Ensure this module path is correct

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Restrict this in production for better security
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use('/files', express.static(path.join(__dirname, 'files')));

// MongoDB connection setup
const mongoUri = "mongodb+srv://admin:admin@journal.p6kw1o3.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB successfully.'))
.catch(e => console.error('Failed to connect to MongoDB:', e));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'files'); // Ensure this directory exists on your server
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage });

// Routes
app.post('/upload-files', upload.single('file'), async (req, res) => {
  const { title, topic } = req.body;
  const fileName = req.file ? req.file.filename : null;

  if (!fileName) {
    return res.status(400).json({ status: 'error', message: 'No file was uploaded.' });
  }

  try {
    await WordSchema.create({ title, topic, word: fileName });
    res.status(201).json({ status: 'ok', message: 'File uploaded successfully.' });
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

app.get('/get-files', async (req, res) => {
  try {
    const files = await WordSchema.find({});
    res.json({ status: 'ok', data: files });
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Serving individual files by ID
app.get('/files/:fileId', async (req, res) => {
  const fileId = req.params.fileId;
  try {
    const file = await WordSchema.findOne({ word: fileId });
    if (!file) {
      return res.status(404).send('File not found');
    }
    const filePath = path.join(__dirname, 'files', file.word);
    res.sendFile(filePath);
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(500).send('Internal server error');
  }
});

app.get('/', (req, res) => {
  res.send('Server is operational.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
