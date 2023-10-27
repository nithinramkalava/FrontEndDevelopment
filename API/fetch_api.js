// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data fetched using fetch:", data);
//   })
//   .catch((error) => {
//     console.error("Error while fetching data using fetch:", error);
//   });

async function fetchDataWithFetch() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Data fetched using async/await and fetch:", data);
  } catch (error) {
    console.error("Error while fetching data using async/await and fetch:", error);
  }
}

fetchDataWithFetch();
