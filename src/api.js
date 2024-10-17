// import axios from "axios";
// import { LANGUAGE_VERSIONS } from "./constants";

// const API = axios.create({
//   baseURL: "https://emkc.org/api/v2/piston",
// });

// export const executeCode = async (language, sourceCode) => {
//   const response = await API.post("/execute", {
//     language: language,
//     version: LANGUAGE_VERSIONS[language],
//     files: [
//       {
//         content: sourceCode,
//       },
//     ],
//   });
//   return response.data;
// };

// api.js
import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const requestBody = {
    language: language,
    version: LANGUAGE_VERSIONS[language], // Use the correct version
    files: [
      {
        content: sourceCode, // The code to execute
      },
    ],
  };

  try {
    const response = await API.post("/execute", requestBody);
    return response.data; // Handle the API response
  } catch (error) {
    console.error(
      "Error executing code:",
      error.response?.data || error.message
    );
    throw error; // Rethrow error for handling in the component
  }
};
