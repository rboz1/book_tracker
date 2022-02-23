import React from 'react';

const AddButton = (props) => {
    return (
        <div>
            <button onClick = {props.popup}>+</button>
        </div>
    );
};

export default AddButton;