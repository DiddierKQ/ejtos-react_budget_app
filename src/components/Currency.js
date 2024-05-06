import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [setName] = useState('');
    const handleOnChange = (value) => {
        dispatch({ type: "CHG_CURRENCY", payload: value });
        setName(value);
    };
    return (
        <div className='alert alert-success'>
            <div class="row">
                <div class="col-sm">
                    <span style={{ color: 'white' }}>Currency</span>
                </div>
                <div class="col-sm">
                    <select class="form-select" aria-label="Default select example" onChange={(event) => handleOnChange(event.target.value)}>
                        <option value="$">$ Dollar</option>
                        <option value="£">£ Pound</option>
                        <option value="€">€ Euro</option>
                        <option value="₹">₹ Ruppee</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
export default Currency;
