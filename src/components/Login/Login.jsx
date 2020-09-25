import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../image/Logo.png';
import './Login.css';
import facebook from '../image/Icon/fb.png';
import google from '../image/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // Google SignInWithPopup
    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const googleSignInUser = {name: displayName, email};
            setLoggedInUser(googleSignInUser);
            history.replace(from);
          })
          .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    // FaceBook SignInWithPopup
    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            const {displayName, email} = result.user;
            const facebookSignIn = {name: displayName, email}
            setLoggedInUser(facebookSignIn);
            history.replace(from);
            console.log(facebookSignIn);
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(error);
          });
    }

    // Create SingUp and Signal
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false, 
        newUser : false,       
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false         
    })

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === "email"){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === "password"){
            const isPasswordValid = e.target.value.length >6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(res);
            })
            .catch( error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);

              });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log(res);
            })
            .catch( error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);

              });
        }
        e.preventDefault();
    }

    return (
        <div>
            <div className="menu">
                <Header></Header>
            </div>

            <div className="formArea">
                <div className="loginPart">
                    <h3>{newUser ? 'Create An Account' : 'Login'}</h3>
                    <form action="" onSubmit={handleSubmit}>
                        {newUser && <input type="text" name="email" onBlur={handleBlur} placeholder="First Name" required/>}<br/>
                        {newUser && <input type="text" name="email" onBlur={handleBlur} placeholder="Last Name" required/>}<br/>
                        <input type="text" name="email" onBlur={handleBlur} placeholder="Email" required/><br/>
                        <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required/><br/>
                        <input className="loginButton" type="submit" value={newUser ? "Create an account" : 'login'}/>
                        <p>Don’t have an account? 
                            <span onClick={() => setNewUser(!newUser) } className="createAccount"> {newUser ? 'Login' : 'Create An Account' }</span>
                        </p>
                    </form>
                </div>

                
                    <span style={{color: 'red'}}>{user.error}</span>
                    {
                        user.success && <span style={{color:'green',fontSize:'20px',textAlign:'center',marginTop:'20px'}}>User{newUser ? 'created' : 'Logged in'} successfully</span>
                    }

                <div className="or">
                    <p>OR</p>
                </div>
                <div className="fireAuth d-flex" onClick={handleFacebookSignIn}>
                    <div className="authLogo"><img src={facebook} alt="" width="30"/></div>
                    <div className="authTitle"><h5>Continue with Facebook</h5></div>
                </div>

                <div className="fireAuth d-flex" onClick={handleGoogleSignIn}>
                    <div className="authLogo"><img src={google} alt="" width="30"/></div>
                    <div className="authTitle"><h5>Continue with Google</h5></div>
                </div>
            </div>
        </div>
    );
};

export default Login;