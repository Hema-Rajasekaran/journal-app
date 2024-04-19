// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");

// const corsConfig = {
//   origin: "https://i-j-r-a-s-t-e-m.vercel.app",
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
// app.options("*", cors(corsConfig));
// app.use(cors(corsConfig));
// app.use("/files", express.static("files"));

// mongoose
//   .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log("Database connection error:", e));

// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const PdfSchema = require("./pdfDetails"); // Assuming pdfDetails.js exports the PdfSchema model
// const upload = multer({ storage: storage });

// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   try {
//     const { title, topic } = req.body;
//     const fileName = req.file.filename;
//     await PdfSchema.create({ title, topic, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     console.error("File upload error:", error);
//     res.status(500).json({ status: "error" });
//   }
// });

// app.get("/get-files", async (req, res) => {
//   try {
//     const data = await PdfSchema.find({});
//     res.send({ status: "ok", data });
//   } catch (error) {
//     console.error("Error fetching files:", error);
//     res.status(500).json({ status: "error" });
//   }
// });

// app.get("/", async (req, res) => {
//   res.send("Success!!!");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const PdfSchema = require("./pdfDetails"); // Assuming pdfDetails.js exports the PdfSchema model

app.use(express.json());
app.use(cors());

const corsConfig = {
  origin: "https://i-j-r-a-s-t-e-m.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
const mongoUrl =
  "mongodb+srv://admin:admin@journal.p6kw1o3.mongodb.net/?retryWrites=true&w=majority&appName=Journal";
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

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.error("Database connection error:", e);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.post("/upload-files", upload.single("file"), async (req, res, next) => {
  try {
    const { title, topic } = req.body;
    const fileName = req.file.filename;
    await PdfSchema.create({ title, topic, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    console.error("File upload error:", error);
    res.status(500).json({ status: "error" });
  }
});

app.get("/get-files", async (req, res, next) => {
  try {
    const data = await PdfSchema.find({});
    res.send({ status: "ok", data });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ status: "error" });
  }
});

// Default route
app.get("/", async (req, res) => {
  res.send("Success!!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
