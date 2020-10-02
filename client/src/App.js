import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import NotesTab from "./components/NotesTab/NotesTab";
import BinTab from "./components/BinTab/BinTab";

import "./App.css";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  const [tab, setTab] = useState(0);
  let toRender = <BinTab />;

  if (tab === 0) {
    toRender = <NotesTab />;
  }

  return (
    <div className="App">
      <NavBar burgerClick={() => setSideOpen(prev => !prev)} />
      <SideBar
        isOpen={sideOpen}
        shrink={() => setSideOpen(false)}
        expand={() => setSideOpen(true)}
        tabClick={setTab}
        selectedTab={tab}
      />
      {toRender}
    </div>
  );
}

export default App;
