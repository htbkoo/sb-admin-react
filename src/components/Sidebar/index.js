import React, {Component} from 'react';

import SidebarContent from "./SidebarContent";
import SidebarExpandButton from "./SidebarExpandButton";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: true
    };
  }

  render() {
    let optionalSidebarContent = this.state.isShown ? <SidebarContent/> : "";

    return (
      <div>
        {optionalSidebarContent}
        <SidebarExpandButton/>
      </div>
    )
  }

}

export default Sidebar;
