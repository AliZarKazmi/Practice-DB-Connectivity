const mongoose = require("mongoose");

const AgentPerformanceSchema = new mongoose.Schema({
  Agent_id: {
    type:Number,
    required:true
  },
  Agent_Name: {
    type:String,
  required:true
},
  Total_Calls: {
    type:Number,
    required:true
  },
  Agent_Confidence: {
    type:Number,
    required:true
  },
  Agent_Professionalism: {
    type:Number,
    required:true
  },
  Customer_Satisfaction:  {
    type:Number,
    required:true
  },
  Customer_Understanding:  {
    type:Number,
    required:true
  },

  Customer_Engagement:  {
    type:Number,
    required:true
  },

  Agent_Performance:  {
    type:Number,
    required:true
  },
});

const AgentPerformanceModel = mongoose.model("agentperformances", AgentPerformanceSchema);

module.exports = AgentPerformanceModel;
