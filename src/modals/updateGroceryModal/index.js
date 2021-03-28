import React, { useEffect } from 'react';
import Modal from 'react-modal'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from '../validationSchema'
import './index.css';

const UpdateGroceryModal = props => {
    const { setModalIsOpen, modalIsOpen, id, name, category, categories, updateGrocery } = props;

    useEffect(() => {
        Modal.setAppElement('#root')
    }, []);

    const onSubmit = values => {
        updateGrocery(values.id, values)
    }

    const initialValues = {
        id,
        name,
        category
    };

    const mapCategories = 
        categories.map(cat => {
            if (cat === category) {
                return (
                    <option key={cat} value={cat} defaultValue>
                        {cat}
                    </option>
                )
            }
            else {
                return(
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                )
            }
        })

    return (
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
        >
        <h2 className="Title">Update Grocery</h2>
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
                        <button className="Button" disabled={!formik.isValid} type='submit'>Update</button>    
                        <button  className="Button" onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>
                </Form>
            )
        }
        </Formik>
      </Modal>

    );
}

export default UpdateGroceryModal;