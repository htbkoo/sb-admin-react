import React from 'react';
import {shallow} from "enzyme/build/index";
import SidebarExpandButton from "./SidebarExpandButton";
import chai from "chai";

describe("Sidebar", function () {
  it("should have <SidebarContent/> and <SidebarExpandButton/>", function () {
    // given
    // when
    let sidebarExpandButton = shallow(<SidebarExpandButton/>);

    // then
    chai.expect(sidebarExpandButton.find("button")).to.have.length(1);
  });
});
