import React from 'react';

import './form-input.styles.scss';

const FormInput = ({label, handleChange, ...otherProps}) => (
    <div className='group'>
        <input type='text' className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>{label}</label>)
                :
                null
        }
    </div>
);

export default FormInput;