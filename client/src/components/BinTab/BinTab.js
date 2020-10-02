import React from "react";
import "./BinTab.css";

const BinTab = props => {
  return (
    <div className="bin-tab">
      <div className="top-text">
        <span>Notes in the Recycle Bin are deleted after 7 days.</span>
        <button id="bttn-empty-bin">Empty bin</button>
      </div>
    </div>
  );
};

export default BinTab;
