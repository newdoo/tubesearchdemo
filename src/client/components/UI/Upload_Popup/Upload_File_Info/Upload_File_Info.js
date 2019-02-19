import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_File_Info.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

class Upload_File_Info extends React.Component {


  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    return (        
      <div className = { cx('Upload_Image_Info')}>
          <div align="right" className = { cx('Upload_Menu_div')}>
            <div onClick = { e=> hand_upload_menu_change(0)} className = { cx('Upload_Menu_Tab' , upload_menu === 0 ? 'Upload_Menu_Tab_Select' : '') }>
                Still   
             </div>

             <div onClick = { e => hand_upload_menu_change(1) }  className = { cx('Upload_Menu_Tab' , upload_menu === 1 ? 'Upload_Menu_Tab_Select' : '') }>
                Animated
             </div>
        </div>             

      </div>      
    );
  }
}


export default connect(
    (state) => ({
        sticker_menu:state.ui.get('ui').get('sticker_menu'),    
    })
)(Upload_File_Info);

