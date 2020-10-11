import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';



class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>Already Signed Up?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmite}>

                    <FormInput
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='Email'
                        required
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        handlechange={this.handleChange} 
                        value={this.state.password} 
                        label='Password'
                        required 
                    />

                    <CustomButton type='submit'> Sign In </CustomButton>
                    {/* <CustomButton onClick={this.props.signInWithGoogle}> Sign In with Google </CustomButton> */}
                    <CustomButton onClick={() => signInWithGoogle()}>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;