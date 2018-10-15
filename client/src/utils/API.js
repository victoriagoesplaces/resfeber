import axios from "axios";

export default {
  // Gets all Activities
  getActivities: function() {
    return axios.get("/api/Activities");
  },
  // Gets the activity with the given id
  getActivity: function(id) {
    return axios.get("/api/Activities/" + id);
  },
  // Deletes the activity with the given id
  deleteActivity: function(id) {
    return axios.delete("/api/Activities/" + id);
  },
  // Saves a activity to the database
  saveActivity: function(activityData) {
    return axios.post("/api/Activities", activityData);
  }
};
