import React from 'react';

import classNames from 'classnames/bind';
import styles from './LoginedLeftMenu.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select  } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';


class LoginedLeftMenu extends React.Component {

  state = {    
    open: false,
    language: 'English',
    anchorEl: null,        
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 버튼 눌렀을때 처리
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  handle_Menu_Change = (value) => {        
    this.props.changeMenuFunc ( value );    
    this.handle_close_mobile_menu();
  };

  handle_language_change = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handle_button_Click = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handle_button_Close = ( event  ) => {    
    
    this.setState({ anchorEl: null });
    if(event !== '') {
      this.setState({ language : event });
    }
  };

  handle_open_mobile_menu = () => {
    this.setState({ mobile_menu: true });
  }

  handle_close_mobile_menu = () => {
    this.setState({ mobile_menu: false });
  };

  handleChange = (event, value) => {
    this.props.changeMenuFunc ( value );    
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  draw_menu_cell = ( menuIndex , link , buttonName ) => {      
    const { menu } = this.props;
    console.log("menu=" + menu);
    return (
      <div className={cx('LoginedLeftMenu_menuCell')}>
           { menu === menuIndex && <div className={cx('LoginedLeftMenu_menu_select')} /> }
            <Link route={ link }>
                <a  className ={cx('LoginedLeftMenu_link' , menu === menuIndex ? 'LoginedLeftMenu_select_menu' : '')}  > { buttonName } </a>
            </Link>
        </div>   
    );
  }

  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('LoginedLeftMenu')}>              
         <div className={cx('LoginedLeftMenu_div')}> 
          { this.draw_menu_cell( 0 ,'loginedHome' , 'Home' ) }
          { this.draw_menu_cell( 1 ,'loginedSticker' , 'Sticker' ) }
          { this.draw_menu_cell( 2 ,'loginedAnalytics' , 'Analytics' ) }      
          </div>
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
  }),null  
)(LoginedLeftMenu);

