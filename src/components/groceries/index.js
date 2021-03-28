import React, { useCallback, useState } from 'react';
import { deleteGroceryById, updateGroceryById } from '../../api/groceryService';
import Grocery from '../grocery';

const Groceries = props => {

    const { categories, groceries, refreshAllGroceries } = props;
    const [message, setMessage] = useState(null);

    const deleteGrocery = useCallback((id, name) => { 
        deleteGroceryById(id, name)
            .then(
                response => {
                    setMessage(`Delete of ${name} Successful`);
                    refreshAllGroceries();
                }
            )
            .catch(err => {
                setMessage(`Failed to delete grocery item`);
            })
    }, []);

    const updateGrocery = useCallback((id, grocery) => { 
        updateGroceryById(id, grocery)
            .then(
                response => {
                    setMessage(`Updated grocery item`);
                    refreshAllGroceries();
                }
            )
            .catch(err => {
                setMessage(`Failed to updated grocery item`);
            })
    }, [])

    return (
        <React.Fragment>
            {message && <div>{message}</div>}
            {groceries.length === 0 ?
                <p>No grocery items found</p> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            groceries.map(
                                grocery => <Grocery key={grocery.id} categories={categories} grocery={grocery} deleteGrocery={deleteGrocery} updateGrocery={updateGrocery} />
                            )
                        }
                        </tbody>
                    </table>
            }
        </React.Fragment>
    );
    
}

export default Groceries;