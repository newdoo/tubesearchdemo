import React from 'react';

import classNames from 'classnames/bind';
import styles from '@styles/base.scss';
const cx = classNames.bind(styles);

import MainContainer from '@containers/MainContainer';

import 'babel-polyfill';

class Index extends React.Component {    

  render() {        
    return (
      <MainContainer />
    )  
  }
}


export default Index;

