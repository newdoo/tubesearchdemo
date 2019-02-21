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

class Index extends React.Component {    

  componentDidMount = async() => {
    initFirebase();

    this.onAuthStateChanged();
    
    // console.log('aaa');
    // auth().getRedirectResult().then(function(result) {
    //   console.log(result);
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // ...
    //   }
    //   // The signed-in user info.
    //   var user = result.user;
    // }).catch(function(error) {
    //   console.log(error);
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    // console.log('bbb');
  }

  onAuthStateChanged = async() => {
    const user = await new Promise((resolve) => auth().onAuthStateChanged((user => user === null ? resolve(null):resolve(user))));
    console.log(user);
    const { YoutubeActions } = this.props;
    YoutubeActions.setUserData({data: user});
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

