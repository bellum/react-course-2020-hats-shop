import React from "react";

import './homepage.styles.scss'
import MenuItem from "../../components/menu-item/menu-item.component";

export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.items = [
            {title: 'HATS', subtitle: 'SHOP NOW'},
            {title: 'JACKETS', subtitle: 'SHOP NOW'},
            {title: 'SNEAKERS', subtitle: 'SHOP NOW'},
            {title: 'WOMENS', subtitle: 'SHOP NOW'},
            {title: 'MENS', subtitle: 'SHOP NOW'},
        ];
    }

    render() {
        return (
            <div className='homepage'>
                <div className='directory-menu'>
                    {this.items.map(item =>
                        <MenuItem key={item.title} title={item.title} subtitle={item.subtitle} />)}
                </div>
            </div>
        );
    }
}
