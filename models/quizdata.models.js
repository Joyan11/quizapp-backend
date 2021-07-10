const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuizSchema = new Schema({
      id:String,
      name:String,
      questions: [{
      questionNo:Number,
      question:String, 
      choices: { type: Array,  option: String, isRight: Boolean  },
      point:Number
    }
    ]
})

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = {Quiz};


