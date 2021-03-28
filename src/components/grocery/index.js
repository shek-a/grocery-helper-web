import React, { useState } from 'react';
import UpdateGroceryModal from '../../modals/updateGroceryModal'
import './index.css';

const Grocery = props => {
    const { categories, grocery, deleteGrocery, updateGrocery } = props
    const { id, name, category } = grocery
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <React.Fragment>
            <tr key={id}>
                <td className="TableRow">{name}</td>
                <td className="TableRow">{category}</td>
                <td className="TableRow"><button onClick={() => setModalIsOpen(true)}>Update</button></td>
                <td className="TableRow"><button onClick={() => deleteGrocery(id, name)}>Delete</button></td>
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
