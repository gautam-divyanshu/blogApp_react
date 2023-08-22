import postModel from "../modals/createPost.js" //don't forget .js , bcauz i forget every time.

const newPost = async (req, res) => {
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
};

export default newPost;
