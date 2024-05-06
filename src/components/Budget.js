import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { budget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        var value = event.target.value;
        if (value < 20000) {
            if (value < remaining) {
                alert("The budget cannot be lower than spending");
                return;
            } else {
                setNewBudget(value);
                return;
            }
        }
        else {
            alert("The budget cannot exceed 20000");
            return;
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
