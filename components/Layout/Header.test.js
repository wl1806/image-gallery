import React, { Fragment, useState, useEffect } from 'react';
import {shallow} from 'enzyme'
import Header from './Header'

describe("header", ()=>{
  test("it should have Home button", ()=>{
    const wrapper = shallow(<Header />);    
    expect(wrapper.contains("Home")).toEqual(true);
  });
});