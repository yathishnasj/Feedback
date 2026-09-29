const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Feedback Server Running");
});

app.post("/api/feedback", (req, res) => {
  console.log("Received Feedback:", req.body);

  res.status(200).json({
    message: "Feedback received successfully!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
