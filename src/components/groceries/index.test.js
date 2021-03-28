import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptar from 'enzyme-adapter-react-16';
import Grocery from '../grocery';
import Groceries from '.';

configure({adapter: new Adaptar()});

describe('groceries component', () => {
    let shallowWrapper;
    const getWrapper = (props) => shallow(<Groceries {...props}/>);

    it('should render groceries when present', () => {
        let props = {
            categories: ['FRUIT', 'VEGETABLE'],
            groceries: [{
                id: 1,
                name: 'apple',
                category: 'FRUIT'
            }, 
            {
                id: 1,
                name: 'orange',
                category: 'FRUIT'
            }]
        };

        shallowWrapper = getWrapper(props);
        let groceries = shallowWrapper.find(Grocery);
        expect(groceries).toHaveLength(2);
        let grocery1 = groceries.at(0).props();
        expect(grocery1.categories).toEqual(grocery1.categories);
        expect(grocery1.Grocery).toEqual(grocery1.grocery[0]);
        let grocery2 = groceries.at(0).props();
        expect(grocery2.categories).toEqual(grocery2.categories);
        expect(grocery2.Grocery).toEqual(grocery2.grocery[0]);
    });

    it('should not render groceries when not present', () => {
        let props = {
            categories: ['FRUIT', 'VEGETABLE'],
            groceries: []
        };

        shallowWrapper = getWrapper(props);
        let groceries = shallowWrapper.find(Grocery);
        expect(groceries).toHaveLength(0);
    });
})
