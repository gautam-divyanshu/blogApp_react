import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import postModel from "./modals/createPost.js"; //don't forget .js , bcauz i forget every time.

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({}));

app.post("/newPost", async (req, res) => {
  const newPost = req.body;
  try {
    const result = await postModel.create(newPost);
    console.log(result);
    // Send a response with the created post data
    res.status(200).json(result);
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the post." });
  }
});

app.listen(5000, () => {
  console.log("server is running on port 3000");
});
