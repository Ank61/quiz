import { useRouter } from "next/router";
import { MainNavbar, MobileResponsiveNav } from "@/components/navbar";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import  fetchPYQuestions  from "@/services/allAPI";

function YearQuestions({ checkYearData }: any) {
  const [questionIndex, setQuestionIndex] = useState<any>(0);
  const router = useRouter();
  const { year } = router.query;
  const testArray = [
    { question: "Question 1 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 2 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 3 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 4 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 5 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 6 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 7 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
    { question: "Question 8 ssfbksjdbfskjbdfksjbfdjskdbfksjbfdksjbf" },
  ];

  return (
    <div>
      <MobileResponsiveNav />
      <MainNavbar />
      <div className="flex font-sans justify-center mt-20 md:mt-14 md:mt-14 text-3xl font-bold">
        Practice
        <span className="ml-2 mr-2" style={{ color: "#6e64ff" }}>
          {year}
        </span>
        Year Questions
      </div>
      <div className="mt-36 flex justify-center p-32">
        {testArray.map((item, index) => {
          if (index === questionIndex) {
            return <div key={index}>{item.question}</div>;
          }
        })}
      </div>
      <div
        className={`grid ${
          questionIndex === 0 ? `grid-cols-1` : `grid-cols-2`
        } gap-2 mt-4 w-full md:w-3/6 md:h-4/6 md:mx-auto my-2 md:my-12`}
      >
        {questionIndex !== 0 ? (
          <div
            onClick={() => {
              if (questionIndex !== 0) {
                setQuestionIndex(questionIndex - 1);
              }
            }}
            className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 p-4 m-1.5 flex font-sans justify-center rounded-xl items-center text-xl"
          >
            <ArrowBackIosIcon className="text-purple-700 text-lg mr-4 md:mr-4" />
            Previous
          </div>
        ) : null}
        <div
          onClick={() => setQuestionIndex(questionIndex + 1)}
          className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 font-sans p-4 m-1.5 flex justify-center rounded-xl items-center text-xl"
        >
          Next <NavigateNextIcon className="text-purple-700 ml-4 md:ml-4" />
        </div>
      </div>
      {/* Fetch and display product details based on the productId */}
    </div>
  );
}

export default YearQuestions;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const fetchYear = params.year;
  const yearData: any = await fetchPYQuestions(fetchYear);
  const checkYearData = yearData ? yearData?.result : null;
  return {
    props: {
      checkYearData,
    },
  };
}
