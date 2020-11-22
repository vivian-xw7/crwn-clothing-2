import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signin-and-signup.scss';

// const SigninAndSignupPage = () => (
//     <div className='signin-and-signup'>
//         <SignIn signInWithGoogle = {signInWithGoogle} />
//     </div>
// );

const SigninAndSignupPage = () => (
    <div className='signin-and-signup'>
    <SignIn />
    <SignUp />
</div>
);

export default SigninAndSignupPage;