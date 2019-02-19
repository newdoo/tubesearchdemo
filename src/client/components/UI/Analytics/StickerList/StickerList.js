import React from 'react';

import classNames from 'classnames/bind';
import styles from './StickerList.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';
import Sticker_Line from '@components/UI/Analytics/Sticker_Line';


const cx = classNames.bind(styles);

const StickerData = [                     
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },                  
  { title:'Pineapple' , image: '' },                  
];

import Line_Evently from '@components/Common/Line_Evently';

class StickerList extends React.Component {

  render() {        
    return (        
      <div className = { cx('StickerList')}>
        <Line_Evently align="top" comp_height = { 42 } >
            <div >
              <Typography className = { cx('StickerList_title') } >  Your top stickers </Typography>                     
            </div>
          </Line_Evently>

        <div className = { cx('StickerList_div')} >  
        {
              StickerData.map(( data ,i) => (
              <Sticker_Line title = { data.title }  image = { data.image }/>
              ))
        }
        </div>
      </div>      
    );
  }
}

export default StickerList;
