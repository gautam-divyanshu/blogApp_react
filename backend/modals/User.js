import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, min: 4 },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
