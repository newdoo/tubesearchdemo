import React from 'react';

import classNames from 'classnames/bind';
import styles from './LoginedTopMenu.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select  } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';

import Account_Popup from '@components/UI/Account_Popup'; 
import Upload_Popup from '@components/UI/Upload_Popup';

class LoginedTopMenu extends React.Component {

  state = {    
    open: false,
    language: 'English',
    anchorEl: null,        

    upload_open: false,
    account_open: false,
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

  handle_button_Account = (event) => {    
    this.setState({ account_open: true });
  }

  handle_button_Account_Close = ( event  ) => {        
    this.setState({ account_open: false });    
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {        
    
    const { menu } = this.props;

    return (        
      <div className = { cx('LoginedTopMenu')}>     
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
                  className = { cx('LoginedTopMenu_upload_button')}                   
                  onClick={this.handle_button_Upload }
            >
              upload
              </Button>

              
              <img src='/static/images/Common/message.svg' className={cx('LoginedTopMenu_message_icon')} />
              <img src='/static/images/Common/oval.svg' className={cx('LoginedTopMenu_message_dot')} />

              <Button className = { cx('LoginedTopMenu_account_button')}  
                onClick={this.handle_button_Account }
              >
                <Typography className = { cx('LoginedTopMenu_hello') } >  Hello </Typography>                     
                <Typography className = { cx('LoginedTopMenu_id') } >  Yanwing </Typography>                     
              
                <img src='/static/images/Common/default_user.png' className={cx('LoginedTopMenu_message_user')} />
              </Button>
                        
            </div>
          </div>
          <Upload_Popup  open = { this.state.upload_open } handleClose = {   this.handle_button_Upload_Close  } />
          <Account_Popup open = { this.state.account_open } handleClose = {   this.handle_button_Account_Close  } />
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
  }),null  
)(LoginedTopMenu);

