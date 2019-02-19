import * as firebase from 'firebase';
import 'es6-promise/auto';

var config = {
    apiKey: "AIzaSyBjePoEdPSib5bFxJ2enjX7zmu56yN5_OE",
    authDomain: "stipop-firebase.firebaseapp.com",
    databaseURL: "https://stipop-firebase.firebaseio.com",
    storageBucket: "stipop-firebase.appspot.com",
};

const signInWithPopupSNS = async(provider, loginType) => {
    try {
        const result = await firebase.auth().signInWithPopup(provider);

        return {
            email: result.user.email,
            password: null,
            name: result.user.displayName,
            uid: result.user.uid,
            loginType: loginType,
        };
    }
    catch(error) {
        if(error.code === 'auth/account-exists-with-different-credential') {            
            //const result = await firebase.auth().signOut();
            //error 처리 안됨
            
        }
        
    };

    
}

export const initFirebase = () => {
   	firebase.initializeApp(config);
}

export const signPopupGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return signInWithPopupSNS(provider, "gle");
}

export const signPopupFacebook = async() => {
    const provider = new firebase.auth.FacebookAuthProvider();

    return signInWithPopupSNS(provider, "fb");
}