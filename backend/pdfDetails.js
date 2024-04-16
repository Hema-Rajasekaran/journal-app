const mongoose = require("mongoose");
const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    topic: String,
    title: String,
  },
  { collection: "pdfDetails" }
);

mongoose.model("PdfDetails", PdfDetailsSchema);
