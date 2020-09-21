import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, hasInvertedColors, ...otherProps}) => (
    <button
        className={`custom-button ${isGoogleSignIn ? 'google-sign-in': ''} ${hasInvertedColors ? 'inverted': ''}`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
