const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: Number,
  URL:  String,
  notes: String,
  date: { type: Date, default: Date.now }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
