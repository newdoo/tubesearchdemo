import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Wallet_Revenue.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);
import Line_Evently from '@components/Common/Line_Evently';

import LinearProgress from '@material-ui/core/LinearProgress';


class Sticker_Wallet_Revenue extends React.Component {

  render() {        
    return (        
      <div className = { cx('Sticker_Wallet_Revenue')}>
         <div className = { cx('Sticker_Wallet_Revenue_top')}>
          <Typography className = { cx('Sticker_Wallet_Revenue_title') } >  Revenue </Typography>                     
          <Typography className = { cx('Sticker_Wallet_Revenue_date') } >  Dec</Typography>                                 
          </div>

          <Typography className = { cx('Sticker_Wallet_Revenue_rest_dollar') } >  $ 0.23 </Typography>                     
          <LinearProgress variant="determinate" value={10} 
          classes={{
              colorPrimary: cx('Sticker_Wallet_root') ,
              barColorPrimary: cx('Sticker_Wallet_bar'),
            }}
           />

          <Typography className = { cx('Sticker_Wallet_Revenue_per_dollar') } >  $ 10.00 </Typography>                     
          <LinearProgress variant="determinate" value={10} 
           classes={{
              colorPrimary: cx('Sticker_Wallet_root_pink') ,
              barColorPrimary: cx('Sticker_Wallet_bar_pink'),
            }}
           />
          <Typography className = { cx('Sticker_Wallet_Revenue_get_dollar') } >  X 2 </Typography>       

          <Line_Evently comp_height = { 56 } >
            <div>
              <Typography className = { cx('Sticker_Wallet_Revenue_expected') } >  expected </Typography>       
            </div>

            <div>
            <Typography className = { cx('Sticker_Wallet_Revenue_total_dollar') } >  $ 20.00 </Typography>       
            </div>
          </Line_Evently>              

          <Typography className = { cx('Sticker_Wallet_Revenue_title') } >
             this amount will be sent to your banking account on 21-23rd next month and the rest not reaching out to $10 will be carried over to the next month revenue.
          </Typography>       

          <div className = { cx('Sticker_Wallet_Revenue_detail')} >
              my banking detail
          </div>

          <img src='static/images/Sticker/mail_off.svg' />

      </div>      
    );
  }
}

export default Sticker_Wallet_Revenue;
