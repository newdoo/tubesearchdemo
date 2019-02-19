import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';
import Total_Line from '@components/UI/Analytics/Total_Line';

const cx = classNames.bind(styles);

import { connect } from 'react-redux';

import Sticker_Draft from '@components/UI/Sticker/Sticker_Draft';
import Sticker_Published from '@components/UI/Sticker/Sticker_Published';
import Sticker_Wallet from '@components/UI/Sticker/Sticker_Wallet';

class Sticker extends React.Component {

  render() {        
    const { sticker_menu } = this.props;

    console.log("sticker_menu 1zx=" + sticker_menu );
    return (        
      <div className = { cx('Sticker')}>
          { sticker_menu === 0 && <Sticker_Draft /> }
          { sticker_menu === 1 && <Sticker_Published /> }
          { sticker_menu === 2 && <Sticker_Wallet /> }
      </div>      
    );
  }
}



export default connect(
  (state) => ({
    sticker_menu:state.ui.get('ui').get('sticker_menu'),    
  }),
  null
)(Sticker);
