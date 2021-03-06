
const INITIAL_STATE = {
    items: [
        {
            id: 1,
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            subtitle: 'SHOP NOW',
            linkUrl: 'shop/hats',
        },
        {
            id: 2,
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            subtitle: 'SHOP NOW',
            linkUrl: 'shop/jackets',
        },
        {
            id: 3,
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            subtitle: 'SHOP NOW',
            linkUrl: 'shop/sneakers',
        },
        {
            id: 4,
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            subtitle: 'SHOP NOW',
            linkUrl: 'shop/womens',
        },
        {
            id: 5,
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            subtitle: 'SHOP NOW',
            linkUrl: 'shop/mens',
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
