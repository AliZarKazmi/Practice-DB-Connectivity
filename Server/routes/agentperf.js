var express = require('express');
const AgentPerformanceModel = require('../Models/AgentPerformance');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    AgentPerformanceModel.find({})
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

module.exports = router;
