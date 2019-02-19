import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Square.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);
import Line_Evently from '@components/Common/Line_Evently';

import Sticker_Total from '@components/UI/Sticker/Sticker_Total';

class Sticker_Square extends React.Component {

  render() {        
    const { pushiedData } = this.props;
    console.log("pushiedData=" + pushiedData) ;
    return (        
      <div className = { cx('Sticker_Square')}>
        <div className = { cx('Sticker_Square_div')}>
         <Typography className = { cx('Sticker_Square_title') } >  Racoon </Typography>       
         <Line_Evently >
            <div>
              <Typography className = { cx('Sticker_Square_date') } >  30.10.2018 </Typography>   
              <img src='/static/images/Sticker/mail_on.svg' className = { cx('Sticker_Square_icon_margin')} />
            </div>  

            <div>
              <img src='/static/images/Sticker/svg_on.svg' className = { cx('Sticker_Square_icon_margin')} />
              <img src='/static/images/Sticker/png_on.svg' className = { cx('Sticker_Square_icon_margin')} />
              <img src='/static/images/Sticker/gif_off.svg' className = { cx('Sticker_Square_icon_margin')} />
              <img src='/static/images/Sticker/write.svg' className = { cx('Sticker_Square_icon_margin')} />
            </div>  
         </Line_Evently>    

         <div align="center" className = { cx('Sticker_Square_images') }>
            <img src='/static/images/Sticker/1.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/2.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/3.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/4.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/5.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/6.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/7.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/8.png' className = { cx('Sticker_Square_icon_margin1')} />
            <img src='/static/images/Sticker/9.png' className = { cx('Sticker_Square_icon_margin1')} />
         </div>   

         { pushiedData !== undefined  && <Sticker_Total/> }
       




         <div className = { cx('Sticker_Square_br') } />
         <div className = { cx('Sticker_Square_underline') } />
        </div>
      </div>      
    );
  }
}

export default Sticker_Square;
