import React from 'react';
import {mount} from "enzyme";
import chai from "chai";

import Sidebar from "./index";
import SidebarContent from "./SidebarContent";
import SidebarExpandButton from "./SidebarExpandButton";

describe("Sidebar", function () {
  it("should have <SidebarContent/> and <SidebarExpandButton/>", function () {
    // given
    // when
    let sidebar = mount(<Sidebar/>);

    // then
    chai.expect(sidebar.find(SidebarContent)).to.have.length(1);
    chai.expect(sidebar.find(SidebarExpandButton)).to.have.length(1);
  });
});
