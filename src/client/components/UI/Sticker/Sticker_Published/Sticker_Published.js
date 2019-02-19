import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Published.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';



const cx = classNames.bind(styles);

const StickerData = [                     
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },                  
  { title:'Pineapple' , image: '' },                  
];

import Line_Evently from '@components/Common/Line_Evently';

import Sticker_Menu from '@components/UI/Sticker/Sticker_Menu';
import Sticker_Order from '@components/UI/Sticker/Sticker_Order';
import Sticker_Party from '@components/UI/Sticker/Sticker_Party';

class Sticker_Published extends React.Component {

  render() {        
    return (        
      <div className = { cx('Sticker_Published')}>
          <Sticker_Menu />
          <Sticker_Order />
          <Sticker_Party pushiedData = { true } />
          <div className = { cx('Sticker_Draft_div')}>
              
          </div>      

      </div>      
    );
  }
}

export default Sticker_Published;
