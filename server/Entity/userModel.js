const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  state: String,
  reason: String,
  private: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
