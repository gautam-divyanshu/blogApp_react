import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import newPost from "./routes/newPost.js"; //don't forget .js again
import postModel from "./modals/createPost.js";
import userModel from "./modals/User.js";
import register from "./routes/register.js";
import md5 from "md5";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({}));

mongoose.connect("mongodb://127.0.0.1:27017/blogs_react");

app.get("/homepage", async (req, res) => {
  try {
    const foundPosts = await postModel.find();
    console.log("Found the data!");
    res.send(foundPosts);
  } catch (err) {
    console.log(err);
  }
});

app.get("/blogDetail/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const foundBlog = await postModel.findById(id);
    console.log("Found the data by id and sending to client.");
    res.send(foundBlog);
  } catch (err) {
    console.log(err);
  }
});

app.post("/newPost", newPost);

app.post("/register", register);

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = md5(req.body.password);
  try {
    const user = await userModel.findOne({ email: email });

    if (password === user.password) {
      res
        .status(200)
        .json({ message: "Authentication successful", user: user });
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("server is running on port 3000");
});
