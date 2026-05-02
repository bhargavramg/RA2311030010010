const express = require("express");
const axios = require("axios");
require("dotenv").config();
const logger = require("./logger");

const app = express();
app.use(express.json());

const BASE_URL = "http://20.207.122.201/evaluation-service";

app.get("/vehicles", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/vehicles`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    logger("GET /vehicles", response.data);

    res.json(response.data);
  } catch (err) {
    logger("ERROR", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/vehicles", async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/vehicles`, req.body, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    logger("POST /vehicles", response.data);

    res.json(response.data);
  } catch (err) {
    logger("ERROR", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
