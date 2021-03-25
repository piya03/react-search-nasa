import React, { useState } from "react";
import "./style.css";
const ThumbnailImage = ({ each }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="thumbnail_container">
      <div className="thumbnail_img">
        <a target="_blank" rel="nasa_img" href={each?.links?.[0]?.href}>
          <img src={each?.links?.[0]?.href} alt="" />
        </a>
      </div>
      <div className="discription">
        <p className="img_title">{each?.data?.[0]?.title}</p>

        <div>
          {!showMore &&
          each?.data?.[0]?.description &&
          each?.data?.[0]?.description?.length > 50 ? (
            <p>
              {" "}
              {each?.data?.[0]?.description.slice(0, 50)}{" "}
              <span className="seemore" onClick={() => setShowMore(true)}>
                ...see more
              </span>{" "}
            </p>
          ) : (
            <div>{!showMore && <p>{each?.data?.[0]?.description}</p>} </div>
          )}
          {showMore && <p>{each?.data?.[0]?.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailImage;
