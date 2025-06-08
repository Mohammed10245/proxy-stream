const express = require("express");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 3000;

const STREAM_URL = "http://stream.mytvplus.net:7002/sport/ch1/ch1_360.m3u8";

app.get("/", (req, res) => {
  request.get(
    {
      url: STREAM_URL,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    }
  ).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
