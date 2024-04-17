const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");

const corsConfig = {
  origin: "*",
  Credential: true,
  mathods: ["GET", "POST", "PUT", "DELETE"],
};
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use("/files", express.static("files"));

const mongoUrl =
  "mongodb+srv://admin:admin@journal.p6kw1o3.mongodb.net/?retryWrites=true&w=majority&appName=Journal";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

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
require("./pdfDetails");
const PdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage: storage });
app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const topic = req.body.topic;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, topic: topic, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: "error" });
  }
});
app.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});
app.get("/", async (req, res) => {
  res.send("Success!!!");
});

app.listen(3000, () => {
  console.log("Server Started");
});
