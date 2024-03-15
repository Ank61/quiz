import { NextApiRequest, NextApiResponse } from "next";
//import { connectDb } from "@/models/connectDB";
//  import pyq from "../pyq";
//import { FetchPreviousQuestions } from "@/Data/PreviousYearQuestions";
import FetchPreviousQuestions from "@/Data/PreviousYearQuestions";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const db = await connectDb();
  // if (db) {
  if (req.method === "POST") {
    try {
      const checkRequest = req.body?.fetchYear;
      if (checkRequest) {
        const data = await FetchPreviousQuestions(checkRequest);
        res.status(200).json({ result: data });
      }
      // else {
      //   const { year, questions } = req.body;
      //   const insertData = new pyq({ year, questions });
      //   await insertData.save();
      //   res.status(201).json({ message: "Question added successfully" });
      // }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else if (req.method === "GET") {
    //     try {
    //       const pyqData = await pyq.find({ year: 2011 });
    //       res.status(200).json(pyqData);
    //     } catch (error) {
    //       console.error("Error fetching pyq data:", error);
    //       res.status(500).json({ message: "Internal Server Error" });
    //     }
    //   } else {
    //     res.status(405).json({ message: "Method Not Allowed" });
    // }
  }
}
// }
