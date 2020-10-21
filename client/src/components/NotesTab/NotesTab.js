import React from "react";
import NewNoteBox from "../NewNoteBox/NewNoteBox";

import "./NotesTab.css";

const NotesTab = props => {
  return (
    <div className="notes-tab">
      <NewNoteBox />
    </div>
  );
};

export default NotesTab;
