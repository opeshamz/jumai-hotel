import React from "react";
import loadingGif from "../images/gif/loadingarrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;