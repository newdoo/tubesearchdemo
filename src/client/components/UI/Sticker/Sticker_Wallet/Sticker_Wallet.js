import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Wallet.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Sticker_Menu from '@components/UI/Sticker/Sticker_Menu';

import Sticker_Wallet_Revenue from '@components/UI/Sticker/Sticker_Wallet_Revenue';
import Sticker_Wallet_History from '@components/UI/Sticker/Sticker_Wallet_History';

class Sticker_Wallet extends React.Component {

  render() {        
    
    return (        
      <div className = { cx('Sticker_Wallet')}>
          <Sticker_Menu />
          <div className = { cx('Sticker_Wallet_div')} >            
              <div className = { cx('Sticker_Wallet_left_div')} >            
                <Sticker_Wallet_Revenue />
              </div>

              <div className = { cx('Sticker_Wallet_right_div')} >                          
              <Sticker_Wallet_History />
              </div>
          </div>

      </div>      
    );
  }
}

export default Sticker_Wallet;
