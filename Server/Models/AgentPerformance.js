const mongoose = require("mongoose");

const AgentPerformanceSchema = new mongoose.Schema({
  Agent_id: Number,
  Agent_Name: String,
  Total_Calls: Number,
  Agent_Confidence: Number,
  Agent_Professionalism: Number,
  Customer_Satisfaction: Number,
  Customer_Understanding: Number,

  Customer_Engagement: Number,

  Agent_Performance: Number,
});

const AgentPerformanceModel = mongoose.model("agentperformances", AgentPerformanceSchema);

module.exports = AgentPerformanceModel;
