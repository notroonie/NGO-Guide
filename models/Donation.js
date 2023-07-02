const mongoose = require("mongoose");
const DonationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  ngotype: {
    type: String,
  },
  ngoname: {
    type: String,
  },
  donation: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  pickup: {
    type: String,
  },

  pickaddres: {
    type: String,
  },
  contact: {
    type: String,
  }
});

module.exports = mongoose.model("Donation", DonationSchema);
