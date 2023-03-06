import React from "react";

import { img_300, unavailable } from "../../Config/config";

import { Badge } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./SingleMedia.css";

const SingleMedia = ({ media }) => {
  return (
    <Link to={`/details/${media.id}/${media.media_type}`}>
      <div className="media">
        <div className="badge-container">
          <Badge
            color="primary"
            badgeContent={media?.vote_average.toFixed(2)}
          ></Badge>
        </div>
        <div style={{ width: "100%", height: "80%" }}>
          <img
            style={{ width: "86%", height: "100%" }}
            alt={media.title}
            src={
              media.poster_path
                ? `${img_300}/${media.poster_path}`
                : unavailable
            }
          />
        </div>

        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            margin: "10px 0px",
            width: "85%",
          }}
        >
          {media.title}
        </p>
      </div>
    </Link>
  );
};

export default SingleMedia;
