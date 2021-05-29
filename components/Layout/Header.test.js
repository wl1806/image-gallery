import React, { Fragment, useState, useEffect } from 'react';
import {shallow} from 'enzyme'
import Header from './Header'

describe("header", ()=>{
  test("it should have Home button", ()=>{
    const wrapper = shallow(<Header />);    
    expect(wrapper.contains("Home")).toEqual(true);
  });

  test("it should have given children", ()=>{
    const wrapper = shallow(<Header
        children={<div>Header's Children</div>}
      />);    
    expect(wrapper.contains("Header's Children")).toEqual(true);
  });
});
