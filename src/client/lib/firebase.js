import * as firebase from 'firebase';
import 'es6-promise/auto';

var config = {
    apiKey: "AIzaSyDxadJcKVm-HtlstDZ33Jnzf5pg98TWS3E",
    authDomain: "tubesearchdemo-5044b.firebaseapp.com",
    databaseURL: "https://tubesearchdemo-5044b.firebaseio.com",
    projectId: "tubesearchdemo-5044b",
    storageBucket: "tubesearchdemo-5044b.appspot.com",
    messagingSenderId: "592749932088"
};

const signInWithRedirect = async(provider) => {
    firebase.auth().signInWithRedirect(provider);
}

const signInWithPopupSNS = async(provider, loginType) => {
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log(result);

        return {
            email: result.user.email,
            password: null,
            name: result.user.displayName,
            uid: result.user.uid,
            loginType: loginType,
        };
    }
    catch(error) {
        console.log(error);
        if(error.code === 'auth/account-exists-with-different-credential') {            
            //const result = await firebase.auth().signOut();
            //error 처리 안됨
            
        }
    };
}

export const initFirebase = async() => {
    if(!firebase.apps.length) {
        console.log('initFirebase');
        firebase.initializeApp(config);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }
}

export const signGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube');

    return signInWithRedirect(provider);
}

export const signPopupGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube');

    return signInWithPopupSNS(provider, "gle");
}

export const signPopupFacebook = async() => {
    const provider = new firebase.auth.FacebookAuthProvider();

    return signInWithPopupSNS(provider, "fb");
}

export const getRedirectResult = async() => {
    return firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
        return result;
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

export const getAuthUser = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user);
          return user;
        } else {
          // No user is signed in.

        }
    });
}

export const auth = () => {
    return firebase.auth();
}