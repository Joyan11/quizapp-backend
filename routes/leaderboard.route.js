const express = require('express');
const router = express.Router();
const { LeaderBoard } = require("../models/leaderboard.models");
const { data } = require("../data");


router.route("/")
  .get(async (req, res) => {
    try {
      const data = await LeaderBoard.find({});
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({  message: "Internal Server Error."})
    }
  })
  .post(async (req, res) => {
    const { data } = req.body;
    try {
      const NewLeaderboard = new LeaderBoard(data);
      await NewLeaderboard.save();
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({message: "Internal Server Error."})
    }
  })

module.exports = router;



