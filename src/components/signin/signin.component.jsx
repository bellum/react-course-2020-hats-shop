import React from 'react';

import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';


class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        })
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        label='Password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                    />

                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default Signin;