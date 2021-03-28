import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';
import AddGrocery from '.';

configure({adapter: new Adaptar()});

describe('add grocery component', () => {
    let shallowWrapper;
    const getWrapper = (props) => shallow(<AddGrocery {...props}/>);

    it('should render add grocery', () => {
        let props = {
            categories: ['FRUIT', 'VEGETABLE']
        };

        shallowWrapper = getWrapper(props);
        expect(shallowWrapper).toMatchSnapshot();

    });
})