import { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from "@/models/connectDB";
import pyq from "../pyq";

let checkModel :any;  

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDb();
  if (db) {
    if (req.method === "POST") {
      try {
        const checkRequest = JSON.parse(req.body.fetchYear);
        const checkRequestInt = parseInt(checkRequest);
        if (checkRequestInt) {
          const pyqData = await pyq.find({ year: checkRequestInt });
          console.log("API response", pyqData);
         return res.status(200).send(pyqData[0].questions);
        } else {
          const { year, questions } = req.body;
          const insertData = new pyq({ year, questions });
          await insertData.save();
          res.status(201).json({ message: "Question added successfully" });
        }
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else if (req.method === "GET") {
      try {
        const pyqData = await pyq.find({ year: 2011 });
        res.status(200).json(pyqData);
      } catch (error) {
        console.error("Error fetching pyq data:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
}
