import React from "react";
import "./SideBar.css";

const SideBar = props => {
  return (
    <ul className={`side-bar ${props.isOpen ? "open" : ""}`}>
      <li
        onClick={() => props.tabClick(0)}
        onMouseOver={props.expand}
        onMouseOut={props.shrink}
        id={props.selectedTab === 0 ? "selected" : undefined}
      >
        <i className="far fa-lightbulb fa-lg"></i>
        <span className="text">Notes</span>
      </li>
      <li
        onClick={() => props.tabClick(1)}
        onMouseOver={props.expand}
        onMouseOut={props.shrink}
        id={props.selectedTab === 1 ? "selected" : undefined}
      >
        <i className="far fa-trash-alt fa-lg"></i>
        <span className="text">Bin</span>
      </li>
    </ul>
  );
};

export default SideBar;
