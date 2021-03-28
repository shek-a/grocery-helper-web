import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../validationSchema'
import './index.css';

const AdddGroceryModal = props => {

    const { setModalIsOpen, modalIsOpen, categories, createGrocery } = props;

    useEffect(() => {
        Modal.setAppElement('#root')
    }, []);

    const onSubmit = values => {
        createGrocery(values)
    }

    const initialValues = {
        name: "",
        category: categories[0]
    };

    const mapCategories = 
        categories.map(cat => {
            return(
                <option key={cat} value={cat}>
                    {cat}
                </option>
            )
        })

    return (
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
        >
        <h2 className="Title">Add Grocery</h2>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit= {onSubmit}
        >
        {
            formik => (
                <Form>
                    <div className="Component">
                        <label className="Label" htmlFor='name'>Name</label>
                        <Field 
                            className="Field"
                            type='text' 
                            id='name' 
                            name='name' 
                        />
                        <ErrorMessage name='name'/>
                    </div>   
                    <div className="Component">
                        <label className="Label" htmlFor='category'>Category</label>
                        <Field 
                            className="Field"
                            as='select' 
                            id='category' 
                            name='category' 
                        >
                        {
                            mapCategories
                        }
                        </Field>
                    </div>
                    <div className="Component">
                        <button className="Button" disabled={!formik.isValid} type='submit'>Add</button>    
                        <button className="Button" onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>  
                </Form>
            )
        }
        </Formik>
      </Modal>

    );
}

export default AdddGroceryModal;