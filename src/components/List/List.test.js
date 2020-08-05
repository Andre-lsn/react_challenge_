import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import List from './List'

Enzyme.configure({ adapter: new Adapter() });

describe('List component', () => {
  it('renders without crashing', () => {
    const list = shallow(<List />)
    expect(list.exists()).to.equals('<li>')
  })
})
