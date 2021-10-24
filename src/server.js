const cors = require("cors");
const express = require("express");
const connectDB = require("./db/dbConfig");
const dotenv = require("dotenv");
const routes = require("./routes");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
connectDB();

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
