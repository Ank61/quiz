import { connectDb } from "@/models/connectDB";
import pyq from "@/models/pyq";

export default async function FetchPreviousQuestions(findYear: Number) {
  await connectDb();
  const fetchData = await pyq.find({ year: findYear });
  return fetchData;
}
