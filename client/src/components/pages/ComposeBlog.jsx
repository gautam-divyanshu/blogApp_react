import React, { useState } from "react";
import axios from "axios";

const ComposeBlog = () => {
  const [post, setPost] = useState({
    imgLink: "",
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
    console.log(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/newPost", post);
      window.location.href = "/"; //error in redirecting is due to sintax fault
    } catch (e) {
      console.log("Error in posting to server:", e);
    }
  };

  return (
    <div className="container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Compose Post
      </h1>

      
        <div className="row g-0 compose_div">
          <div className="col-md-5 compose_img">
            <img
              src={post.imgLink}
              alt="img.png"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-7">
            <form className="compose_form" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Image link address"
                name="imgLink"
                value={post.imgLink}
                onChange={handleInputChange}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                name="title"
                value={post.title}
                onChange={handleInputChange}
              />
              <textarea
                className="form-control"
                placeholder="Body"
                rows="9"
                cols="50"
                name="content"
                value={post.content}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn custom-btn form-control">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

  );
};

export default ComposeBlog;
