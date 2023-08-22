import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlogData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/blogDetail/${id}`
        );
        setBlogData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container blogDetail">
      <div className="col-md-8">
        <h3>{blog.title}</h3>
        <div className="blogDetailImg">
          <div className="col-md-8">
            <img src={blog.imgLink} alt="img" className="card-img-top" />
          </div>
        </div>
        {blog.content && (
          <div>
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
