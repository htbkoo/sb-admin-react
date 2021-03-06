import React from 'react';
import {shallow} from "enzyme";
import chai from "chai";

import Sidebar from "./index";
import SidebarContent from "./SidebarContent";
import SidebarExpandButton from "./SidebarExpandButton";

describe("Sidebar", function () {
  it("should have <SidebarContent/> and <SidebarExpandButton/>", function () {
    // given
    // when
    let sidebar = shallow(<Sidebar/>);

    // then
    chai.expect(sidebar.find(SidebarContent)).to.have.length(1);
    chai.expect(sidebar.find(SidebarExpandButton)).to.have.length(1);
  });

  it("should, when state.isShown===false, have <SidebarExpandButton/> but no <SidebarContent/> ", function () {
    // given
    // when
    let sidebar = shallow(<Sidebar/>);
    sidebar.setState({isShown: false});

    // then
    chai.expect(sidebar.find(SidebarContent)).to.have.length(0);
    chai.expect(sidebar.find(SidebarExpandButton)).to.have.length(1);
  });
});
