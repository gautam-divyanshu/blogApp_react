import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import newPost from "./routes/newPost.js"; //don't forget .js again
import postModel from "./modals/createPost.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({}));

app.get("/homepage", async (req, res) => {
  const foundPosts = await postModel.find();
  console.log("Found the data!");
  res.send(foundPosts);
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

app.listen(5000, () => {
  console.log("server is running on port 3000");
});
