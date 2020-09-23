import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './shop.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectCollectionItems} from '../../redux/collection/collection.selectors';

const ShopPage = ({items}) => (
    <div className='shop-page'>
        {
            items.map(({id, title, items}) => (
                <CollectionPreview key={id} title={title} items={items.slice(0, 4)}/>
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    items: selectCollectionItems,
});


export default connect(mapStateToProps)(ShopPage);
