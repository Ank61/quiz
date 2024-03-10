import mongoose from "mongoose";

const previousYearPaper = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  questions: [
    {
      question: String,
      answer: String,
      select: [{ type: String }],
    },
  ],
});

export default mongoose.models.PYQ || mongoose.model("PYQ", previousYearPaper);
