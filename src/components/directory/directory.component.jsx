import React from 'react';
import {connect} from 'react-redux';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {createStructuredSelector} from 'reselect';
import {selectDirectoryItems} from '../../redux/directory/directory.selectors';

const Directory = ({items}) => {
    return (
        <div className='directory-menu'>
            {
                items.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
   items: selectDirectoryItems,
});


export default connect(mapStateToProps)(Directory);
