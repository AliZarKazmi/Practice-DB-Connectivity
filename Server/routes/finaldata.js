var express = require("express");
const FinalDataModel = require("../Models/FinalData");
var router = express.Router();

/* GET home page. */
router.get("/:number",async function (req, res, next) {
  const count = await FinalDataModel.find({}).count();
  const totalPages = count / 20;
  console.log(totalPages,count);
  FinalDataModel.find({})
    .skip((req.params.number - 1) * 20)
    .limit(20)
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

module.exports = router;
