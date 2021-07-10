const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaderSchema = new Schema({
      name:String,
      quizname:String,
      score:Number,
      tag:String
    }
)

const LeaderBoard = mongoose.model("Leaderboard", LeaderSchema);

module.exports = { LeaderBoard}