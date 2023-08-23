import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/homepage")
      .then((response) => {
        setData(response.data); // Assuming response.data is an array of data objects
        setLoading(false);
        console.log("client got the data."); // Logging the received data
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="container homePost">
      <div>
        {data.map((item) => (
          <Link
            key={item._id}
            to={`/blog/${item._id}`}
            className="custom-link-style"
          >
            <div className="row g-0">
              {/* images */}
              <div className="col-md-3">
                <img
                  src={item.imgLink}
                  className="img-fluid rounded-start"
                  alt="img.png"
                />
              </div>
              {/* title */}
              <div className="col-md-4">
                <div className="card-body">
                  <h4 className="card-title homeTitle">{item.title}</h4>
                </div>
              </div>
              {/* content */}
              <div className="col-md-5">
                <div className="card-body">
                  <p className="card-text content">
                    {item.content.slice(0, 200) + " . . . ."}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
