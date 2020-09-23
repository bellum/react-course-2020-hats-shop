import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionItems} from '../../redux/collection/collection.selectors';

import './collections-overview.styles.scss';


const CollectionsOverview = ({items}) => (
    <div className="collections-overview">
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

export default connect(mapStateToProps)(CollectionsOverview);