import React, { useState } from "react";
import "./NewNoteBox.css";

const NewNoteBox = props => {
  const [open, setOpen] = useState(false);

  const handleNoteSave = event => {
    console.log("Saved note");
  };

  return (
    <div className={`new-note-box ${open ? "open" : ""}`}>
      {!open ? (
        <input
          type="text"
          className="note-content"
          placeholder="Take a note..."
          onClick={() => setOpen(true)}
        />
      ) : (
        <div>
          <input type="text" className="note-title" placeholder="Title" />
          <input
            type="text"
            className="note-content"
            placeholder="Take a note..."
            onClick={() => setOpen(true)}
          />
          <i className="fas fa-thumbtack icon-pin"></i>
          <div className="bttns-container">
            <button className="bttn-save" onClick={handleNoteSave}>
              Save
            </button>
            <button className="bttn-close" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNoteBox;
