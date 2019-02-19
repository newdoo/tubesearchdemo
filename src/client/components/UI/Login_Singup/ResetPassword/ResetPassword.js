import React from 'react';

import classNames from 'classnames/bind';
import styles from './ResetPassword.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField , Checkbox   } from '@material-ui/core/';
import { Router } from '@common/routes';

import LoginTextField from '@components/UI/Login_Singup/LoginTextField';
import BottomLogin from '@components/UI/Login_Singup/BottomLogin';
import LoginMenu from '@components/UI/Login_Singup/LoginMenu';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';


import network from '@lib/network';

class ResetPassword extends React.Component {

  state = {
    password: '',
    passwordConfirmation:'',

    passwordError: '',
    passwordConfirmationError: '',

    buttonDisable: true,

    emailError: '',
  };

  componentDidMount() {
    this.updateError();
  }

  updateError = () => {
    const { password, passwordConfirmation } = this.state;
    // 비밀번호는 최소 6자 이상이어야 합니다.
    if(password !== '' && password.length < 6) {
      this.setState({passwordError: 'Error__Code__03'});
    } else {
      this.setState({passwordError: ''});
    }
    // 비밀번호가 일치하지 않습니다
    if(password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation) {
      this.setState({passwordConfirmationError: 'Error__Code__04'});
    } else {
      this.setState({passwordConfirmationError: ''});
    }

    this.updateButton();
  }

  updateButton = () => {
    this.setState((pv) => ({
      buttonDisable: 
      pv.passwordError !== '' || 
      pv.passwordConfirmationError !== '' 
    }) );
  }

  onTextChange = name => event => {    
    this.setState({ [name]: event.target.value }, () => this.updateError());
  }


  onHandleClick = async() => {    

    console.log("onHandleClick");
    
    //token 값 
    const { password } = this.state;
    const { token } = this.props;

    const params = {
      password: password,           
      token:   token,
    };
     
     const recv = await network("/webTest/webStudio/v2/studio/passwd/reset", "post", params);
     
     console.log(recv.status);

     // TODO : 로그인 처리
     if(recv.status === "success") {
       Router.pushRoute('reset_password_done');  
     } 
     else if(recv.error === 9006) { // 에러 처리
       this.setState({emailError: 'error_9006'});       
       console.log("send_authEmail Error ");
       Router.pushRoute('reset_password_error');  
     }
  }

  handle_button_forgot_password = () => {
    Router.pushRoute('forgot_password');  
  }
  
  draw_reset_password_done = () => {
    const { language } = this.props;
    return (
      <div align="center"   className = { cx('Popup__Inner', 'ResetPassword_done')}>        
        <div className = { cx('Popup__Inner__Div')}>      
          <LoginMenu rightTitle="ResetPassword__Tab"  />   
          <div className = { cx('Popup__Inner__Box')}>                                
            <Typography className = { cx('ResetPassword_done_desc') } > 
              {ReactHtmlParser(getLanguage("ResetPassword__Done__Desc", language))}
            </Typography>                     
          </div>
        </div>        
      </div>      
    );
  }

  draw_reset_password = () => {
    const { language } = this.props;    
    const { password, passwordConfirmation,passwordError, passwordConfirmationError, buttonDisable } = this.state;

    return (
        <div align="center"   className = { cx('Popup__Inner', 'ResetPassword')}>        
          <div className = { cx('Popup__Inner__Div')}>        
            <div className = { cx('Popup__Inner__Box')}>                                
                <Typography className = { cx('ResetPassword_title') } > {getLanguage("ResetPassword__Tab", language)} </Typography>                     
                <div className = { cx('ResetPassword_title_br')} />       
                
                <LoginTextField type='password'  onChange={this.onTextChange('password')} vaule={password} title = "ResetPassword__Password" errorTxt={passwordError} />
                <LoginTextField type='password'  onChange={this.onTextChange('passwordConfirmation')} vaule={passwordConfirmation} title = "ResetPassword__Password__Confirmation" errorTxt={passwordConfirmationError}  comp_height ={ 110 }/>

                <div className = { cx('ResetPassword_desc_br')} />
                <BottomLogin onlyButton = { true } disabled={buttonDisable}  buttonName = "ResetPassword__Button" onHandleClick = { this.onHandleClick } />               

              </div>
          </div>        
        </div>      
    );
  }

  
  draw_reset_password_error = () => {
    const { language } = this.props;
    return (
      <div align="center"   className = { cx('Popup__Inner', 'ResetPassword_done')}>        
        <div className = { cx('Popup__Inner__Div')}>      
          <LoginMenu rightTitle="ResetPassword__Tab"  />   
          <div className = { cx('Popup__Inner__Box')}>                                
            <Typography className = { cx('ResetPassword_done_desc') } > 
              {ReactHtmlParser(getLanguage("ResetPassword__TOKEN_Error__Desc", language))}
              <Button 
                    disableRipple
                    className = { cx('Signup_done_desc3') }
                    onClick = { this.handle_button_forgot_password } 
                  > 
                   { getLanguage("ResetPassword__Desc__1", language) }
                  </Button>

            </Typography>                     
          </div>
        </div>        
      </div>      
    );
  }


  render() {            
    const { type } = this.props;

  console.log( "type=" + type);
    return (        
      <div>      
        { type === 1 && this.draw_reset_password() }
        { type === 2 && this.draw_reset_password_done() }
        { type === 3 && this.draw_reset_password_error() }
      </div>      
    );
  }
}

export default connect(
  (state) => ({
      language: state.ui.get('ui').get('language'),    
      token: state.ui.get('ui').get('token'),   
  }),
)(ResetPassword);

