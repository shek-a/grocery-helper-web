import React, { useCallback, useState } from 'react';
import { addGrocery } from '../../api/groceryService';
import AddGroceryModal from '../../modal/addGroceryModal'

const AddGrocery = props => {
    const { categories, refreshAllGroceries } = props
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const createGrocery = useCallback(grocery => { 
        addGrocery(grocery)
            .then(
                response => {
                    setMessage(`Added grocery item ${grocery.name}`);
                    refreshAllGroceries();
                }
            )
            .catch(err => {
                setMessage(`Failed to add grocery item`);
            })
    }, [])

    return (
        <div>
        <button onClick={() => setModalIsOpen(true)}>Add Grocery</button>
        {message && <div>{message}</div>}
            <AddGroceryModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                categories={categories}
                createGrocery={createGrocery}
            />
        </div>
    );
}

export default React.memo(AddGrocery);