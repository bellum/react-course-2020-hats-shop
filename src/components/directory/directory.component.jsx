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
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    subtitle: 'SHOP NOW',
                    linkUrl: 'hats',
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    subtitle: 'SHOP NOW',
                    linkUrl: '',
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    subtitle: 'SHOP NOW',
                    linkUrl: '',
                },
                {
                    id: 4,
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    subtitle: 'SHOP NOW',
                    linkUrl: '',
                },
                {
                    id: 5,
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    subtitle: 'SHOP NOW',
                    linkUrl: '',
                },
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.items.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;
