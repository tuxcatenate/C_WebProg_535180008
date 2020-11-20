const mongoose = require("mongoose"),
  memberSchema = mongoose.Schema({
    name: String,
    email: String,
    credit: Number,
  });
  //supaya module dapat diakses oleh file lain.
module.exports = mongoose.model("Member", memberSchema);
