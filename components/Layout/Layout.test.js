import React, { Fragment, useState, useEffect } from 'react';
import {shallow} from 'enzyme'
import Layout from './index'

describe("layout", ()=>{
  test("it should have given children", ()=>{
    const wrapper = shallow(<Layout><div>layout's children</div></Layout>);    
    expect(wrapper.contains("layout's children")).toEqual(true);
  });

  test("it should have given header", ()=>{
    const wrapper = shallow(<Layout
        headerChild={<div>header</div>}
      />);    
    expect(wrapper.contains("header")).toEqual(true);
  });
});
