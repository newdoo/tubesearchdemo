import React from 'react';

import classNames from 'classnames/bind';
import styles from './ForgotPassword.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField , Checkbox   } from '@material-ui/core/';

import LoginTextField from '@components/UI/Login_Singup/LoginTextField';
import BottomLogin from '@components/UI/Login_Singup/BottomLogin';

import { Router } from '@common/routes';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';

import network from '@lib/network';

import { verifyEmail } from '@lib/utils';

class ForgotPassword extends React.Component {

  
  state = {
    email: '',  
    emailError:'',

    buttonDisable: true,
  };

  componentDidMount() {
    this.updateError();
  }

  updateError = () => {
    const { email } = this.state;
    // 이메일 형식 확인
    if(email !== '' && !verifyEmail(email)) {
      this.setState({emailError: 'Error__Code__02'});
    } else {
      this.setState({emailError: ''});
    }

    this.updateButton();
  }

  updateButton = () => {
    this.setState((pv) => ({
      buttonDisable:  
        pv.emailError !== '' ||
        pv.email === ''
      }) );
  }

  onTextChange = name => event => {    
    this.setState({ [name]: event.target.value }, () => this.updateError());
  }

  onHandleClick = async() => {    
    const { email } = this.state;
    const params = {
      email: email,              
    };
     
     const recv = await network("/webTest/webStudio/v2/studio/passwd/forgot", "post", params);
     
     console.log(recv.status);

     // TODO : 로그인 처리
     if(recv.status === "success") {
       Router.pushRoute('forgot_password_done');  
     } 
     else if(recv.error === 9005) { // 에러 처리
       this.setState({emailError: 'error_9005'});       
     }

  }

  draw_forgot_password_done = () => {
    const { language } = this.props;
    return (
        <div align="center"   className = { cx('Popup__Inner', 'ForgotPassword_done')}>        
        <div className = { cx('Popup__Inner__Div')}>      
          <Typography className = { cx('ForgotPassword_title') } > {getLanguage("ForgotPassword__Tab", language)} </Typography>                     
     
          <div className = { cx('Popup__Inner__Box')}>                    
              <Typography className = { cx('ForgotPassword_done_desc') } > 
              {ReactHtmlParser(getLanguage("ForgotPassword__Done__Desc", language))}
              </Typography>                     
          </div>
        </div>        
      </div>      
    );
  }
  
  draw_forgot_password = () => {
    const { language } = this.props;
    const { email, emailError, buttonDisable } = this.state;
    return (
        <div align="center"   className = { cx('Popup__Inner', 'ForgotPassword')}>        
          <div className = { cx('Popup__Inner__Div')}>        
            <div className = { cx('Popup__Inner__Box')}>                                
               
                <Typography className = { cx('Forgot_password_title') } > {getLanguage("ForgotPassword__Tab", language)} </Typography>                     

                <div className = { cx('Forget_title_br')} />       
                <LoginTextField onChange={this.onTextChange('email')} value={email} title="ForgotPassword__Email" comp_height ={ 120 } errorTxt={emailError}  />             
                <Typography align="left" className = { cx('Forgot_password_desc') } > {getLanguage("ForgotPassword__Desc", language)} </Typography>                     

                <div className = { cx('Forgot_desc_br')} />
                <BottomLogin disabled={buttonDisable} onlyButton = { true } buttonName="ForgotPassword__Button"  onHandleClick = { this.onHandleClick } />               

              </div>
          </div>        
        </div>      
    );
  }

 

  render() {            
    const { done } = this.props;
    return (        
      <div>
        { done === undefined && this.draw_forgot_password() }
        { done !== undefined && this.draw_forgot_password_done() }
      </div>
    );
  }
}

export default connect(
  (state) => ({
      language: state.ui.get('ui').get('language'),    
  }),
)(ForgotPassword);

