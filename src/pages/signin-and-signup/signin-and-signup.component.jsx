import React from 'react';

import './signin-and-signup.styles.scss';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

const SigninAndSignup = (props) => (
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <Signup/>
    </div>
);

export default SigninAndSignup;
