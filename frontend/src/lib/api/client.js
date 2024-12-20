// client.js

import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://ec2-100-27-188-22.compute-1.amazonaws.com",
  }),
  options
);

export default client;
