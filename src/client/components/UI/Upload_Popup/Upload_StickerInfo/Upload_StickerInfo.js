import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_StickerInfo.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

import Upload_TextField from '@components/UI/Upload_Popup/Upload_TextField';
import Upload_Category from '@components/UI/Upload_Popup/Upload_Category';
import Upload_Price from '@components/UI/Upload_Popup/Upload_Price';
import Upload_Terms from '@components/UI/Upload_Popup/Upload_Terms';


class Upload_StickerInfo extends React.Component {


  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    return (        
      <div className = { cx('Upload_StickerInfo')}>
        <div className = { cx('Upload_StickerInfo_div')}>
          <Upload_TextField title='Stickers name' desc='Sticker name must be within 50 characters and may only contain letters and numbers.'  />
          <Upload_Category />          
          <Upload_TextField title='Keyword' desc='Please write 2 - 5 keywords. Use comma to seperate keywords.Good specific keywords help users find what they want.Give a minimum of two emotional tags that define your stickers.'  />
          <Upload_Price />
          <Upload_Terms />
        </div>
      </div>      
    );
  }
}


export default connect(
    (state) => ({
        sticker_menu:state.ui.get('ui').get('sticker_menu'),    
    })
)(Upload_StickerInfo);

