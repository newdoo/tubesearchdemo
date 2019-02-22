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

class Index extends React.Component {    

  componentDidMount = async() => {
    initFirebase();

    this.onAuthStateChanged();
    this.onAuthLoginCheck();
  }

  onAuthStateChanged = async() => {
    const user = await new Promise((resolve) => auth().onAuthStateChanged((user => user === null ? resolve(null):resolve(user))));
    console.log(user);
    const { YoutubeActions } = this.props;
    YoutubeActions.setUserData({data: user});
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

