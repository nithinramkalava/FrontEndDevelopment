const axios = require("axios");

// Using Axios to fetch data from a fake API
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// axios
//   .get(apiUrl)
//   .then((response) => {
//     console.log("Data fetched using Axios:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error while fetching data using Axios:", error);
//   });


async function fetchDataWithAxios() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await axios.get(apiUrl);
    console.log("Data fetched using async/await and Axios:", response.data);
  } catch (error) {
    console.error("Error while fetching data using async/await and Axios:", error);
  }
}

fetchDataWithAxios();
