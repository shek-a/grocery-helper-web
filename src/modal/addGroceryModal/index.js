import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

    const validationSchema = Yup.object({
        name: Yup.string().required('Grocery name is required')
    })

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
        <h2>Add Grocery</h2>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit= {onSubmit}
        >
        {
            formik => (
                <Form>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <Field 
                            type='text' 
                            id='name' 
                            name='name' 
                        />
                        <ErrorMessage name='name'/>
                    </div>   
                    <div>
                        <label htmlFor='category'>Category</label>
                        <Field 
                            as='select' 
                            id='category' 
                            name='category' 
                        >
                        {
                            mapCategories
                        }
                        </Field>
                    </div>  
                    <button disabled={!formik.isValid} type='submit'>Add</button>    
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </Form>
            )
        }
        </Formik>
      </Modal>

    );
}

export default AdddGroceryModal;