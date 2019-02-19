import React from 'react';

import classNames from 'classnames/bind';
import styles from './Letter_Reader.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select  } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Line_Evently from '@components/Common/Line_Evently';

import ReactHtmlParser from 'react-html-parser';

const temp_desc ="Dear Yawning,thanks for submitting your great work. We sicerely appreciate your contribution to the stipop world.By the way, your sticker package needs a bit of amendment in order of our standard guideline for sticker creation.For more detail, please see the link here,https://stipop.io/legal/review_guidelineWe kindly suggest you to apply this minor tweaks as early as you could, so that your good work could be published on stipop market shortly.If you have any futher queries, please don’t hesitate to contact us.Looking forward to your work to be published soon!Best regards,Team Stipop";

class Letter_Reader extends React.Component {

  render() {            
    
    return (        
      <div className = { cx('Letter_Reader')}>              
        <Line_Evently comp_height = { 38 } >
            <div>               
                  <Typography className = { cx('Letter_Reader_sender') } >  Admin </Typography>                     
                  <Typography className = { cx('Letter_Reader_date') } >  12:03 30/10/2018 </Typography>                                 
            </div>
        </Line_Evently>
        <div className = { cx('Letter_Reader_underline') } />

        <div className = { cx('Letter_Reader_desc') }  >
        {
            ReactHtmlParser(temp_desc)               
        }                    
        </div>
        <div className = { cx('Letter_Reader_br') } />
         
      </div>      
    );
  }
}

export default Letter_Reader;

