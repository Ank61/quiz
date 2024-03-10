import type { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from "@/models/connectDB";
import pyq from "@/models/pyq";
// type Data = {
//   name: number;
// };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = await connectDb();
  if (req.method === 'POST') {
    try {
      const { year, questions } = req.body;
      const insertData = new pyq({ year, questions });
      await insertData.save();
      res.status(201).json({ message: 'Question added successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}