import React from 'react';

import classNames from 'classnames/bind';
import styles from './LoginedHome.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);
import { connect } from 'react-redux';


import Total from '@components/UI/LoginedHome/Total';
import DailyIncrease from '@components/UI/LoginedHome/DailyIncrease';
import Yourfan from '@components/UI/LoginedHome/Yourfan';

import Keyword from '@components/UI/LoginedHome/Keyword';
import Reaction from '@components/UI/LoginedHome/Reaction';
import Popularity from '@components/UI/LoginedHome/Popularity';

import Fellow from '@components/UI/LoginedHome/Fellow';
import Prifile from '@components/UI/LoginedHome/Profile';
import Wholike from '@components/UI/LoginedHome/Wholike';

class LoginedHome extends React.Component {

  
  render() {            
    return (        
      <div className = { cx('LoginedHome')}>
        <div className = { cx('LoginedHome_line')}>
          <Total />
          <DailyIncrease/>
          <Yourfan />
        </div>
        
        <div className = { cx('LoginedHome_divide')} />

        <div className = { cx('LoginedHome_line')}>
          <Keyword />
          <Reaction />
          <Popularity />
        </div>
       
        <div className = { cx('LoginedHome_divide')} />

        <div className = { cx('LoginedHome_line')}>
          <Fellow />
          <Prifile />
          <Wholike />
        </div>

        <div className = { cx('LoginedHome_br')} />
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
  }),null  
)(LoginedHome);

