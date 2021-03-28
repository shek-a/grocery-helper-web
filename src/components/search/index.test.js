import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';
import Search from '.';

configure({adapter: new Adaptar()});

describe('search component', () => {
    let shallowWrapper;
    const getWrapper = (props) => shallow(<Search {...props}/>);

    it('should render search', () => {

        let props = {
            categories: ['FRUIT', 'VEGETABLE']
        };

        shallowWrapper = getWrapper(props);
        expect(shallowWrapper).toMatchSnapshot();
    });
})