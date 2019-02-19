import React from 'react';

import classNames from 'classnames/bind';
import styles from './LoginedPopupMenu.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select  } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';

import Upload_Popup from '@components/UI/Upload_Popup';

class LoginedPopupMenu extends React.Component {

  state = {    
    open: false,
    language: 'English',
    anchorEl: null,        

    upload_open: false,
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 버튼 눌렀을때 처리
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // english , 한글 선택 버튼
  handle_button_Click = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  //창 닫기
  handle_button_Close = ( event  ) => {        
    this.setState({ anchorEl: null });
    if(event !== '') {
      this.setState({ language : event });
    }
  };

  handle_button_Upload = (event) => {    
    this.setState({ upload_open: true });
  }

  handle_button_Upload_Close = ( event  ) => {        
    this.setState({ upload_open: false });    
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {        
    
    const { menu } = this.props;
    const { open , handleClose   } = this.props;

    return (        
      <div className = { cx('LoginedPopupMenu')}>     
          <div className = { cx('LoginedTopMenu_div')}>     
            <div className = { cx('LoginedTopMenu_left')}>                 
                <img src='/static/images/logo-pink.svg' />       
                <img src='/static/images/tag-studio.png'  className = { cx('LoginedTopMenu_studio')} />       
                <Button
                      className = { cx('LoginedTopMenu_select')} 
                      aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                      aria-haspopup="true"
                      onClick={this.handle_button_Click}
                >
                  { this.state.language }                  
                      <img src='/static/images/gray_arrow.svg'  className = { cx('LoginedTopMenu_underArrow')} />
                  </Button>

                { /*  English 한국어 선택 화면*/}
                  <Menu                    
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={ e=> this.handle_button_Close('')}
                  >
                    <MenuItem onClick={ e=> this.handle_button_Close('English')}> English </MenuItem>
                    <MenuItem onClick={ e=> this.handle_button_Close('한국어')}> 한국어 </MenuItem>          
                  </Menu>                   
            </div>

            <div align="right" className={cx('LoginedTopMenu_Button_div')}> 
            <Button
                    className = { cx('LoginedPopupMenu_cancel')}                     
                    onClick={ handleClose }
              >
              Cancel uploading
              </Button>
            </div>

        </div>      
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
  }),null  
)(LoginedPopupMenu);

