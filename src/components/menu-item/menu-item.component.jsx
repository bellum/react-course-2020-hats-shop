import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, subtitle}) => (
    <div className='menu-item'>
        <div className="content">
            <h1 className="title">{title}</h1>
            <div className="subtitle">{subtitle}</div>
        </div>
    </div>
);

export default MenuItem;