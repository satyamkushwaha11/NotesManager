const express = require("express");
const connectToMongo = require("./connection/db");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(cors());

app.use("/", require("./route"));
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

connectToMongo().then(() => {
    app.listen(PORT, () => {
      console.log(`listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
