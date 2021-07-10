const express = require('express');
const cors = require("cors");
const { dbConnect } = require("./database/database.connect");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan());
app.use(express.json());
dbConnect();

app.use("/quiz", require("./routes/quizdata.route"));
app.use("/leaderboard",require("./routes/leaderboard.route"))
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});