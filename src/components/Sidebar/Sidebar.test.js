import React from 'react';
import {shallow} from "enzyme";
import chai from "chai";

import Sidebar from "./index";
import SidebarContent from "./SidebarContent";

describe("Sidebar", function () {
  it("should have <SidebarContent/> and <SidebarExpandButton/>", function () {
    // given
    // when
    let sidebar = shallow(<Sidebar/>);

    // then
    chai.expect(sidebar.find(SidebarContent)).to.have.length(1);
  });
});
