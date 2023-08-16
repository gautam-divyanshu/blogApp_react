import React, { useState } from "react";

const ComposeBlog = () => {
  const [imgLink, setImgLink] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(title);
  console.log(content);

  return (
    <div className="compose_div">
      <h1>Compose Post</h1>
      <div>
        <img src={imgLink} alt="img.png" />
        <form className="compose_form">
          <input
            className="form-control"
            type="text"
            placeholder="Image link address"
            onChange={(e) => {
              setImgLink(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Body"
            rows="4"
            cols="50"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComposeBlog;
