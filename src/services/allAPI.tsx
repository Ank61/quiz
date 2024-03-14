import axios from "axios";

export const fetchPYQuestions = async (year: any) => {
  try {
    const yearFetched: any = { fetchYear: year };
    console.log("Sending API post request", yearFetched);
    await axios
      .post("http://localhost:3000/api/hello", yearFetched)
      .then((response) => {
        return response.data;
      }).catch(err=> console.log("Error **",err))
    // const yearData = await fetch("http://localhost:3000/api/hello", {
    //   method: "POST",
    //   body: JSON.stringify(yearFetched),
    // });
    // console.log("datat" , yearData)
    // .then((response) => console.log("Response from server", response))
    // .then((data) => console.log("Response from server2", data));
    // return yearData
  } catch (error) {
    console.log("Data from year", error);
  }
};
