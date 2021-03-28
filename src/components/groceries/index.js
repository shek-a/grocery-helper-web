import React, { useCallback, useState } from 'react';
import { deleteGroceryById, updateGroceryById } from '../../api/groceryService';
import Grocery from '../grocery';
import './index.css';

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
        <div className="Groceries">
            {message && <div className="Message">{message}</div>}
            {groceries.length === 0 ?
                <p className="NoGroceries">No grocery items found</p> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="TableHeading">Name</th>
                                <th className="TableHeading">Category</th>
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
        </div>
    );
    
}

export default Groceries;