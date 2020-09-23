import {createSelector} from 'reselect';

const selectCollections = state => state.collection;

export const selectCollectionItems = createSelector(
    [selectCollections],
    collections => collections.items,
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollectionItems],
    collection_items => collection_items[collectionUrlParam],
);
