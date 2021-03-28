import React, { useState } from 'react';
import UpdateGroceryModal from '../../modal/updateGroceryModal'

const Grocery = props => {
    const { categories, grocery, deleteGrocery, updateGrocery } = props
    const { id, name, category } = grocery
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <React.Fragment>
            <tr key={id}>
                <td>{name}</td>
                <td>{category}</td>
                <td><button onClick={() => setModalIsOpen(true)}>Update</button></td>
                <td><button onClick={() => deleteGrocery(id, name)}>Delete</button></td>
            </tr>
            <UpdateGroceryModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                updateGrocery={updateGrocery}
                id={id}
                name={name}
                category={category}
                categories={categories}
            />
        </React.Fragment>
    );
}

export default React.memo(Grocery);
