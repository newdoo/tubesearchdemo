import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Party.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);
import Line_Evently from '@components/Common/Line_Evently';

import Sticker_Square from '@components/UI/Sticker/Sticker_Square';

import Letter from '@components/Common/Letter';


class Sticker_Party extends React.Component {

  render() {        
    const { pushiedData } = this.props;
    console.log("Sticker_Party=" + pushiedData );
    return (        
      <div className = { cx('Sticker_Party')}>
        <div className = { cx('Sticker_List_div')}>
            <Sticker_Square pushiedData = { pushiedData } />
            <Sticker_Square pushiedData = { pushiedData }/>
            <Sticker_Square pushiedData = { pushiedData }/>
         </div>
        <Letter />

      </div>      
    );
  }
}

export default Sticker_Party;
