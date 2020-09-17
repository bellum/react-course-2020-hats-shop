import React from "react";

import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    title: 'HATS',
                    subtitle: 'SHOP NOW',
                },
                {
                    id: 2,
                    title: 'JACKETS',
                    subtitle: 'SHOP NOW',
                },
                {
                    id: 3,
                    title: 'SNEAKERS',
                    subtitle: 'SHOP NOW',
                },
                {
                    id: 4,
                    title: 'WOMENS',
                    subtitle: 'SHOP NOW',
                },
                {
                    id: 5,
                    title: 'MENS',
                    subtitle: 'SHOP NOW',
                },
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.items.map(({id, title, subtitle}) => (
                        <MenuItem key={id} title={title} subtitle={subtitle}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;
