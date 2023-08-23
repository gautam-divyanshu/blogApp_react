import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  imgLink: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const postModel = mongoose.model("Post", postSchema);

export default postModel;
