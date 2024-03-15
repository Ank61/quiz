import axios from "axios";

export default async function fetchPYQuestions(year: any) {
  try {
    const yearFetched: any = { fetchYear: year };
    const resp = await axios.post(
      "http://localhost:3000/api/hello",
      yearFetched
    );
    return resp?.data;
  } catch (error) {
    console.log("Data from year", error);
  }
}
