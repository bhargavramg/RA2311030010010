require("dotenv").config();
const axios = require("./node_modules/axios/index.d.cts");

const BASE_URL = "http://20.207.122.201/evaluation-service";

async function test() {
  try {
    const res = await axios.get(`${BASE_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    console.log(res.data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

test();
