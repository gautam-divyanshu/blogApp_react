import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/blogs_react");

const postSchema = {
    imgLink:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true}
};

const postModel = mongoose.model("Post",postSchema);

export default postModel;