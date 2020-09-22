import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// localStorage
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: [
       // userReducer is not persisted cause it's cared by Firebase
       'cart',  // persist cartReducer only
   ],
};

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
