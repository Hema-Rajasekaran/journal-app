const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const PdfSchema = require("./pdfDetails"); // Assuming pdfDetails.js exports the PdfSchema model
// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/files", express.static("files"));

// MongoDB connection
const mongoUrl =
  "mongodb+srv://admin:admin@journal.p6kw1o3.mongodb.net/?retryWrites=true&w=majority&appName=Journal";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Connected to database"))
  .catch((e) => console.log("Database connection error:", e));

// Multer configuration for file uploads
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Routes
app.post("/upload-files", upload.single("file"), async (req, res) => {
  try {
    const { title, topic } = req.body;
    const fileName = req.file.filename;
    await PdfSchema.create({ title, topic, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    const data = await PdfSchema.find({});
    res.send({ status: "ok", data });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("success!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
