import React from "react";
import "./style.css";
const ThumbnailImage = () => {
  return (
    <div className="thumbnail_container">
      <div className="thumbnail_img">
        <a
          target="_blank"
          href="https://media-exp1.licdn.com/dms/image/C561BAQHrxN7ELDqjRg/company-background_10000/0/1553194455335?e=2159024400&v=beta&t=vBIjSWrhaL6osNLlbRmeGaq0atQPIAndFs_TsMZYgQM"
        >
          <img
            src="https://media-exp1.licdn.com/dms/image/C561BAQHrxN7ELDqjRg/company-background_10000/0/1553194455335?e=2159024400&v=beta&t=vBIjSWrhaL6osNLlbRmeGaq0atQPIAndFs_TsMZYgQM"
            alt=""
          />
        </a>
      </div>
      <div className="discription">
        <p>image title</p>
        <p>Date created</p>
      </div>
    </div>
  );
};

export default ThumbnailImage;
