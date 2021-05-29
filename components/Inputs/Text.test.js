import React, { Fragment, useState, useEffect } from 'react';
import {shallow} from 'enzyme'
import Text from './Text'

describe("text input", ()=>{
  const callback = jest.fn()
  const wrapper = shallow(<Text 
    handleChangeInput={callback}
    value={''}
    placeholder="the placeholder"/>);    
  const input = wrapper.find('input').at(0);

  test("it should have placeholder", ()=>{
    expect(input.props().placeholder).toBe('the placeholder')
  });
  test("it should call call back when input", ()=>{
    input.simulate('change', { target: { value: 'Hello' } })
    expect(callback).toHaveBeenCalledWith('Hello')
  });
});
