import React from "react";
import { Link } from "react-router-dom";
function HomeScreen() {
  return (
    <div className="home-flex">
      <div className="empty-div">
        <div className="background-image"></div>
      </div>
      <div className="home-text">
        <h1 style={{ fontSize: "50px", color: "#F59646" }}>
          Start Building Your <br />
          Own Career <br />
          Now...
        </h1>

        <Link to="/signin-mentee">
          <button
            style={{
              fontSize: "5rem",
              borderRadius: "10px",

              fontWeight: "bolder",
              backgroundColor: "#3b71b8f3",
              color: "white",
            }}
          >
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
