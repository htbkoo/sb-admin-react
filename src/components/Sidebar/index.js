import React, {Component} from 'react';

import SidebarContent from "./SidebarContent";
import SidebarExpandButton from "./SidebarExpandButton";

class Sidebar extends Component {

  render() {
    return (
      <div>
        <SidebarContent/>
        <SidebarExpandButton/>
      </div>
    )
  }

}

export default Sidebar;
