import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';
import {HomePage} from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {
    unsubscribeFromFirebaseAuth;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromFirebaseAuth = auth.onAuthStateChanged(async user => {
            if (!user) {
                setCurrentUser(null);
                return;
            }

            const userRef = await createUserProfileDocument(user);
            userRef.onSnapshot(userSnapshot => {
                setCurrentUser({
                    id: userSnapshot.id,
                    ...userSnapshot.data(),
                })
            });
        })
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        if (typeof this.unsubscribeFromFirebaseAuth !== 'undefined') {
            this.unsubscribeFromFirebaseAuth();
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch> {/* Switch stops on first matched route */}
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? <Redirect to='/'/> : <SigninAndSignup/>}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
