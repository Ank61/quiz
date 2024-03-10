// const mongoose = require('mongoose');
// import pyq from "@/models/pyq";

// async function insertQuestions(year : number, questionsArray :any) {
//     try {
//       // Create an array to hold the formatted questions
//       const formattedQuestions :any = [];
  
//       // Format the questions and answers
//       questionsArray.forEach((question : any) => {
//         formattedQuestions.push({
//           question: question.question,
//           options: question.options,
//           answer: question.answer
//         });
//       });
  
//       // Insert the questions into the database
//       await pyq.create({
//         year: year,
//         questions: formattedQuestions
//       });
  
//       console.log('Questions inserted successfully.');
//     } catch (error) {
//       console.error('Error inserting questions:', error);
//     }
//   }


// export const connectDb = async () => {
//     try {
//         console.log("Checking")
//         await mongoose.connect("mongodb+srv://quiz:quiz@quiz.as3jzp9.mongodb.net/?retryWrites=true&w=majority&appName=quiz");\

//         console.log("MongoDB Connected");



//         const questionsArray : any = [
//             {
//               question: "India has experienced persistent and high food inflation in the recent past. What could be the reasons?",
//               options: [
//                 "Due to gradual switch over to the cultivation of commercial crops, the area under the cultivation of food grains has steadily decreased in the last five years by about 30%.",
//                 "As a consequence of increasing incomes, the consumption patterns of people have undergone a significant change.",
//                 "The food supply chain has structural constraints."
//               ],
//               answer: "b"
//             },
//             {
//               question: "In terms of economy, the visit by foreign nationals to witness the XIX Commonwealth Games in India amounted to",
//               options: [
//                 "Export",
//                 "Import",
//                 "Production",
//                 "Consumption"
//               ],
//               answer: "a"
//             },
//             {
//               question: "Which one of the following statements appropriately describes the 'fiscal stimulus'?",
//               options: [
//                 "It is a massive investment by the Government in manufacturing sector to ensure the supply of goods to meet demand surge caused by rapid economic growth.",
//                 "It is an intense affirmative action of the Government to boost economic activity in the country.",
//                 "It is the Government's intensive action on financial institutions to ensure disbursement of loans to agriculture and allied sectors to promote greater food production and contain food inflation.",
//                 "It is an extreme affirmative action by the government to pursue its policy of financial inclusion."
//               ],
//               answer: "b"
//             }
//           ];
// const year = 2011;
// insertQuestions(year, questionsArray);
//         return ;
//     }
//     catch (error) {
//         console.error("Error while connecting to db", error);
//     }
// }

// connectDb();