import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_Popup.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import LoginedPopupMenu from '@components/Common/LoginedPopupMenu';
import Upload_Menu from '@components/UI/Upload_Popup/Upload_Menu';
import Upload_Image from '@components/UI/Upload_Popup/Upload_Image_Info';
//왼쪽
import Upload_StickerInfo from '@components/UI/Upload_Popup/Upload_StickerInfo';
//오른쪽
import Upload_Image_Info from '@components/UI/Upload_Popup/Upload_Image_Info';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class Upload_Popup extends React.Component {
  state = {    
    upload_menu:0,
  };

  hand_upload_menu_change = ( menu ) => {
    console.log("hand_upload_menu_change=" + menu );
    this.setState({ upload_menu: menu });
  };



  render() {        
    const { language } = this.props;
    const { open , handleClose   } = this.props;
    const { upload_menu } = this.state;
    console.log("open=" + open);
    return (        
      
           <Dialog
            fullScreen
            open={ open }
            onClose={ handleClose}
            TransitionComponent={Transition}
          >
          <div className = { cx('Upload_Popup')}>
            <LoginedPopupMenu handleClose ={ handleClose}  />
              <div className = { cx('Upload_Popup_default')}>
                <Upload_Menu upload_menu = { upload_menu } hand_upload_menu_change = { this.hand_upload_menu_change } />
                <div className = { cx('Upload_Popup_div')} >            
                  <div className = { cx('Upload_Popup_left_div')} >            
                    <Upload_StickerInfo />
                  </div>

                  <div className = { cx('Upload_Popup_right_div')} >                          
                    <Upload_Image_Info upload_menu = { upload_menu }  />
                  </div>
              </div>
              </div>
          </div>      
          </Dialog>
    );
  }
}

export default connect(
  (state) => ({
    language: state.ui.get('ui').get('language'),
  })
)(Upload_Popup);

