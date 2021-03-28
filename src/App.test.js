import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';
import App from './App';
import AddGrocery from './components/addGrocery';
import Groceries from './components/groceries';
import Search from './components/search';

configure({adapter: new Adaptar()});

describe('app component', () => {
    let shallowWrapper;
    const getWrapper = () => shallow(<App/>);

    it('should render app', () => {
        shallowWrapper = getWrapper();
        let addGrocery = shallowWrapper.find(AddGrocery);
        expect(addGrocery).toHaveLength(1);
        let grocery = shallowWrapper.find(Groceries);
        expect(grocery).toHaveLength(1);
        let search = shallowWrapper.find(Search);
        expect(search).toHaveLength(1);
    });
})
