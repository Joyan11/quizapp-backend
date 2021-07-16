const express = require('express');
const router = express.Router();
const { Quiz } = require("../models/quizdata.models");


router.route("/:quizid")
  .get(async (req, res) => {
    const { quizid } = req.params;
    try {
      const data = await Quiz.findOne({ id: quizid });
      data.__v = undefined;
      res.status(200).json( data );
    } catch (error) {
      res.status(500).json({  message: "Internal Server Error." })
    }
  })

module.exports = router;



