import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninAndSignupPage from './pages/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  // for firebase to know when the authentication state has changed
  // parameter is the auth user state
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        {/* header is aware if the user is signed in or not */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SigninAndSignupPage}></Route>
        </Switch>
      </div>
    );
  }
}


// --------------------------------------
// there is a bug in the authentication
// --------------------------------------


// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//  apiKey: "AIzaSyD-oKBfq8cQcBjfd_4IO4iQRZDp_T2Nt9M",
//             authDomain: "crwn-clothing-db-e56cf.firebaseapp.com",
//             databaseURL: "https://crwn-clothing-db-e56cf.firebaseio.com",
//             projectId: "crwn-clothing-db-e56cf",
//             storageBucket: "crwn-clothing-db-e56cf.appspot.com",
//             messagingSenderId: "33343628816",
//             appId: "1:33343628816:web:1e919024cc6e7e2fb78c95",
//             measurementId: "G-P2L0STFC0C"
// };


// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();

// const signInWithGoogle = () => {
//           auth.signInWithPopup(provider);
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
//       </header>
//     </div>
//   );
// }

// ------------------------------------------------

export default App;
