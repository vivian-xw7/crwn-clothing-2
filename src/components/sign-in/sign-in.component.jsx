import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';
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

    handleSubmit = async event => {
        event.preventDefault();

        const  { email, password } = this.state();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
        }

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

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        {/* <CustomButton onClick={this.props.signInWithGoogle}> Sign In with Google </CustomButton> */}
                        <CustomButton onClick={() => signInWithGoogle()} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;