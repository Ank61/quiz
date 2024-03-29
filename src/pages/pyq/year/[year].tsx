import { useRouter } from "next/router";
import { MainNavbar, MobileResponsiveNav } from "@/components/navbar";
import { useState, useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import fetchPYQuestions from "@/services/allAPI";
function YearQuestions({ checkYearData }: any) {
  const [questionIndex, setQuestionIndex] = useState<any>(0);
  const [allQuestions, setAllQuestions] = useState<any>([]);
  const [allResponse, setAllResponse] = useState<any>([]);
  const [selectedResponse, setSelectedResponse] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter();
  const { year } = router.query;
  useEffect(() => {
    let filteredArray = checkYearData[0]?.questions?.filter(
      (item: any) => item?.question !== ""
    );
    // console.log("data", filteredArray);
    setAllQuestions(filteredArray);
  }, []);
  useEffect(() => {
    console.log("Initial Data", allQuestions[currentIndex]);
    console.log("Updated Data", allResponse);
  }, [allResponse, allQuestions]);
  const handleResponse = (item: any, selectedOption: string, question: number) => {
    const responseObj = {
      questionNo: question,
      question: item.question,
      options: item.select,
      selectedOption: selectedOption,
    };
    const checkDublicate = allResponse.find((item: any) => item.questionNo === responseObj.questionNo);
    if (checkDublicate) {
      let updatedPrevious = allResponse;
      allResponse.forEach((element: any, index: number) => {
        if (element.questionNo === checkDublicate.questionNo) {
          updatedPrevious.splice(index, 1);
          const finalUpdatedResponse = [...updatedPrevious, responseObj].sort((intial: any, next: any) => intial.questionNo - next.questionNo);
          setAllResponse(finalUpdatedResponse);
        }
      });
    }
    else {
      setAllResponse((prev: any) => [...prev, responseObj]);
    }
    const findIn = allQuestions.findIndex((ele: any) => ele.question === item.question);
    if (findIn > -1) {
      allQuestions[findIn].selectedOption = selectedOption;
    }
    setSelectedResponse(selectedOption);
    setCurrentIndex(question - 1);
  };
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
      <div className="font-sans font-semibold text-xl antialiased mt-16 flex justify-center p-3  ">
        {allQuestions?.map((item: any, index: any) => {
          if (index === questionIndex) {
            return (
              <div key={index} className="mx-2">
                <span className="font-bold" style={{ color: "#6e64ff" }}>
                  Q{index + 1}.
                </span>{" "}
                {item.question}
                <div className="mt-12 text-xl">
                  {item.select.map((options: string, rank: number) => (
                    <div className="mt-1" id={options} key={options}>
                      <input
                        className="mr-4 "
                        type="radio"
                        checked={item.selectedOption === options}
                        id={options}
                        name="fav_language"
                        value={options}
                        onChange={(e) =>
                          handleResponse(item, e.target.id, index + 1)
                        }
                      />
                      <label id={options} onClick={(e: any) =>
                        handleResponse(item, e.target.id, index + 1)
                      }>{options}</label>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div
        className={` grid ${questionIndex === 0 ? `grid-cols-1` : `grid-cols-2`
          } gap-2 mt-4 w-full md:w-3/6 md:h-4/6 md:mx-auto my-2 md:my-12`}
      >
        {questionIndex !== 0 ? (
          <div
            onClick={() => {
              if (questionIndex !== 0) {
                setQuestionIndex(questionIndex - 1);
              }
            }}
            className={`serviceButton bg-gradient-to-r from-blue-50 to-purple-50 p-4 m-1.5 flex font-sans justify-center rounded-xl items-center text-xl`}
          >
            <ArrowBackIosIcon className="text-purple-700 text-lg mr-4 md:mr-4" />
            Previous
          </div>
        ) : null}
        <div
          onClick={() => { setQuestionIndex(questionIndex + 1); setSelectedResponse('') }}
          className={` serviceButton bg-gradient-to-r from-blue-50 to-purple-50 font-sans p-4 m-1.5 flex justify-center rounded-xl items-center text-xl`}
        >
          Next <NavigateNextIcon className="text-purple-700 ml-4 md:ml-4" />
        </div>
      </div>
    </div>
  );
}
export default YearQuestions;
export async function getServerSideProps(context: any) {
  //ServerSide Props meaning each request will get updated API data
  //Use static props instead
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
