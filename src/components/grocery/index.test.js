import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';
import Grocery from '.';

configure({adapter: new Adaptar()});

describe('grocery component', () => {
    let shallowWrapper;
    const getWrapper = (props) => shallow(<Grocery {...props}/>);

    it('should render grocery', () => {
        let props = {
            categories: ['FRUIT', 'VEGETABLE'],
            grocery: [{
                id: 1,
                name: 'apple',
                category: 'FRUIT'
            }
            ]
        };

        shallowWrapper = getWrapper(props);
        expect(shallowWrapper).toMatchSnapshot();
    });
})
