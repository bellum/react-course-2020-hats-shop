import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, subtitle, imageUrl, size}) => (
    <div className={`menu-item ${size}`}>
        <div className="background-image"
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="subtitle">{subtitle}</div>
        </div>
    </div>
);

export default MenuItem;
