import React from 'react';

import classNames from 'classnames/bind';
import styles from '@styles/base.scss';
const cx = classNames.bind(styles);

import MainContainer from '@containers/MainContainer';

import 'babel-polyfill';

import { initFirebase, getAuthUser, getRedirectResult, auth } from '@lib/firebase';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as youtubeActions from '@store/modules/youtube';

import network from '@lib/network';
import * as firebase from 'firebase';

class Index extends React.Component {    

  componentDidMount = async() => {
    initFirebase();

    this.onAuthStateChanged();
    this.onIdTokenChanged();
    this.onAuthLoginCheck();

    console.log(auth().currentUser);
  }

  onAuthStateChanged = async() => {
    const user = await new Promise((resolve) => auth().onAuthStateChanged((user => user === null ? resolve(null):resolve(user))));
    const { YoutubeActions } = this.props;
    YoutubeActions.setUserData({data: user});

    if(user === null )
      return;

    // console.log(user);
    // // console.log(user.toJSON());
    // // console.log(user.getIdToken());
    // const idToken = await user.getIdToken();
    // console.log(idToken);
    // const idTokenResult  = await user.getIdTokenResult();
    // console.log(idTokenResult);

    // const accessToken = await user.toJSON().stsTokenManager.accessToken;
    // console.log(accessToken);

    // const credential = firebase.auth.GoogleAuthProvider.credential("eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyNGQ2YTE5MzA2NjljYjc1ZjE5NzBkOGI3NTRhYTE5M2YwZDkzMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTkyNzQ5OTMyMDg4LWk1M2NpdWZwMWZndWI1MzJybHU2amxlZHB0cGoyMnVqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTkyNzQ5OTMyMDg4LWk1M2NpdWZwMWZndWI1MzJybHU2amxlZHB0cGoyMnVqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MzYwMjM5NzE5MjEzNDYwMjUxIiwiaGQiOiJudW1peGVudC5jb20iLCJlbWFpbCI6ImRvbzg4NjZAbnVtaXhlbnQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJRNzd2TDNvcWVmeWNSUGpUSk52dkZ3IiwiaWF0IjoxNTUxMDg5MjQ2LCJleHAiOjE1NTEwOTI4NDZ9.QeEEh0uSkmUtRGZqQ9M_vcNRWci_KNUjbiiU0ATr1JgIZ39Etcl7mcM59rRmS8HA3R5sX5OFv0mH4usP3nRUYrjpaDyOvISzTO90jaaTgA5j39O98osWGgZmfF9jvc23uV7wYcv4PRVufr9Cs83Cx6AW874Rbuk6c3vAraGN34yy1rDLWFgA1co-SG5i06H8JhIDOBczE6lqSTEKe0N3w7wcTEsZo4ApL-8MBAdIY-34jHAPRsKM2KSxRfdY0vXEfp-FvbuqaaMQpcgCNC_lOcfn0XzexcybiU2eeVrTcTzjEQ2JFoKJvBLdhRz3YJrfbgYKJIx2qSEHkM-pHh1tdQ"
    // ,"ya29.Gly7Bq9JERuLX6-u7hstowAzpNdnAv0PNFGgbj7NGGv8P2w1m8ygtBvkeUJlKaNfN0am3QrR8Vi0pI7ZYlmFdaDBwLf8pIi71NBgrHf-ajpZ3Ora1CuZrVfY7nVH2A");
    // console.log(credential);

    // //console.log(await user.reauthenticateAndRetrieveDataWithCredential(credential));

    // const aa = await auth().signInAndRetrieveDataWithCredential(credential);
    // console.log(aa);

    // const result = await auth().signInAndRetrieveDataWithCredential(credential);
    // console.log(result);

    // const userCredential = await new Promise((resolve) => auth().signInAndRetrieveDataWithCredential(
    //   credential, userCredential => userCredential === null ? resolve(null): resolve(userCredential))); 
    // console.log(userCredential);

    // Sign in with credential from the Google user.
    // auth().signInAndRetrieveDataWithCredential(credential).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    //   console.log(errorCode);
    //   console.log(errorMessage);
    //   console.log(error.credential);
    // });
  }

  onIdTokenChanged = async() => {
    const user = await new Promise((resolve) => auth().onIdTokenChanged((user => user === null ? resolve(null):resolve(user))));
    //console.log(user.toJSON());
  }

  onAuthLoginCheck = async() => {
    console.log('onAuthLoginCheck Start');
    auth().getRedirectResult().then(async function(result) {
      console.log('getRedirectResult');
      console.log(result);
      if(result.user !== null) {
        const recv = await network('youtube','login', {user: result});
        console.log(recv);
      }
      
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    console.log('onAuthLoginCheck End');
  }

  render() {        
    return (
      <MainContainer />
    )  
  }
}

export default connect(
  (state) => ({
    user: state.youtube.get('user').get('user'),      
  }),
  (dispatch) => ({
    YoutubeActions: bindActionCreators(youtubeActions, dispatch),    
  })
)(Index);

