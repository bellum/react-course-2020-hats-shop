import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
};

const selectCollections = state => state.collection;

export const selectCollectionItems = createSelector(
    [selectCollections],
    collections => collections.items,
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollectionItems],
    collection_items => collection_items.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam],
    ),
);
