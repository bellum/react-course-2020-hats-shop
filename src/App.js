import React from 'react';
import './App.css';

import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Route, Switch} from "react-router-dom";
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';

function App() {
    return (
        <div>
            <Header />
            <Switch> {/* Switch stops on first matched route */}
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/signin' component={SigninAndSignup} />
            </Switch>
        </div>
    );
}

export default App;
