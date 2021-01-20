import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>DRM</h3>
        <ExpandMoreIcon />
      </div>
      <div class="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="side__header">
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
