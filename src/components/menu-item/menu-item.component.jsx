import React from 'react';

import './menu-item.styles.scss';
import {withRouter} from "react-router-dom";

const MenuItem = ({title, subtitle, imageUrl, size, history, linkUrl, match}) => (
    <div className={`menu-item ${size}`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
