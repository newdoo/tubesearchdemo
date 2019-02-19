import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Wallet_History.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);
import Line_Evently from '@components/Common/Line_Evently';



class Sticker_Wallet_History extends React.Component {

  draw_sentense = ( month , year , dollar) => {
    return (
      <Line_Evently comp_height = { 50 } >
        <div>
          <div>
            <Typography className = { cx('Sticker_Wallet_History_date') } >  { month }  </Typography>         
            <Typography className = { cx('Sticker_Wallet_History_date') } >  { year } </Typography>         
          </div>
        </div>

        <div>
          <Typography className = { cx('Sticker_Wallet_History_dollar') } >  { dollar }  </Typography>        
        </div>
      </Line_Evently>            
    );
  } 

  render() {        
    return (        
      <div className = { cx('Sticker_Wallet_History')}>
          <Typography className = { cx('Sticker_Wallet_History_title') } >  History </Typography>         

          <Line_Evently comp_height = { 60 }  >
            <div>
              <div>
              <Typography className = { cx('Sticker_Wallet_History_date') } >  total </Typography>         
              <Typography className = { cx('Sticker_Wallet_History_date') } >  since Dec 2017 </Typography>         
              </div>
            </div>

            <div>
              <Typography className = { cx('Sticker_Wallet_History_Top_dollar') } >  $ 120.00 </Typography>        
            </div>
          </Line_Evently>            

          <div className = { cx('Sticker_Wallet_History_underline') } />
          
          <div className = { cx('Sticker_Wallet_History_div') } >
          {
            this.draw_sentense('Dec','2018','$20.00')
          }

          {
            this.draw_sentense('Nov','2018','$20.00')
          }

          {
            this.draw_sentense('Oct','2018','$10.00')
          }

          {
            this.draw_sentense('Oct','2018','$10.00')
          }

          {
            this.draw_sentense('Oct','2018','$10.00')
          }

          {
            this.draw_sentense('Oct','2018','$10.00')
          }

          {
            this.draw_sentense('Oct','2018','$10.00')
          }

          {
            this.draw_sentense('Oct','2018','$10.00')
          }
          

          </div>

      </div>      
    );
  }
}

export default Sticker_Wallet_History;

