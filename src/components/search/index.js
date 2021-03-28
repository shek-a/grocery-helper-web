import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { SEARCH_ALL } from '../../Constants';

const Search = props => {

    const [searchCategories, setSearchCategories] = useState([]);
    const { categories, fetchGroceriesByCategory } = props;

    useEffect(() => {
        setSearchCategories(categories);
    }, [categories]);

    const onSubmit = value => {
        fetchGroceriesByCategory(value.category);
    }

    const defaultSearchCategory = [<option key={SEARCH_ALL} value={SEARCH_ALL}>{SEARCH_ALL}</option>];

    const configuredSearchCategories = searchCategories.map(category => {
        return(
            <option key={category} value={category}>
                {category}
            </option>
        )
    });

    let initialValues = {
        category: ''
    };        

    return (
            <Formik
                initialValues={initialValues}
                onSubmit= {onSubmit}
            >
            {
                formik => (
                    <Form>
                        <div>
                            <label htmlFor='category'>Search By Category</label>
                            <Field 
                                as='select' 
                                id='category' 
                                name='category' 
                            >
                            {
                                [...defaultSearchCategory, ...configuredSearchCategories]
                            }
                            </Field>
                        </div>  
                        <button type='submit'>Search</button>    
                    </Form>
                )
            }
            </Formik>
        );
}

export default React.memo(Search);