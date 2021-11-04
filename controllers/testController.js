const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  const dummyData = [
    { name: "datapoint 1", description: "first test" },
    { name: "datapoint 2", description: "first test part 2" },
  ];
  res.json(dummyData);
});


module.exports = router;
