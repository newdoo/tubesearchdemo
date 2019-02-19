import React from 'react';

import classNames from 'classnames/bind';
import styles from './Signup.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField , Checkbox   } from '@material-ui/core/';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import LoginMenu from '@components/UI/Login_Singup/LoginMenu';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';

import LoginTextField from '@components/UI/Login_Singup/LoginTextField';
import BottomLogin from '@components/UI/Login_Singup/BottomLogin';

import { Link , Router  } from '@common/routes';

import { verifyEmail } from '@lib/utils';

import network from '@lib/network';

import { signPopupGoogle, signPopupFacebook } from '@lib/firebase';

import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

class Signup extends React.Component {

  state = {
    checkedA: false,  

    userName: '',
    email: '',
    password: '',
    passwordConfirmation: '',

    // error
    userNameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',

    buttonDisable: true,
  };

  componentDidMount() {
    this.updateError();
    
    const { token , type } = this.props;    
    //email 이 verified 된거라면
    if(type === 2 && token !== undefined) {
      console.log("token" + token);
      this.send_authEmail();
    }

  }

  updateError = () => {
    const { userName, email, password, passwordConfirmation } = this.state;
    // 닉네임 최소 4자 이상
    if(userName !== '' && userName.length < 4) {
      this.setState({userNameError: 'Error__Code__01'});
    } else {
      this.setState({userNameError: ''});
    }
    // 이메일 형식 확인
    if(email !== '' && !verifyEmail(email)) {
      this.setState({emailError: 'Error__Code__02'});
    } else {
      this.setState({emailError: ''});
    }
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
        pv.emailError !== '' || 
        pv.userNameError !== '' || 
        pv.passwordConfirmationError !== '' || 
        !pv.checkedA ||
        pv.password === '' ||
        pv.email === '' ||
        pv.userName === '' || 
        pv.passwordConfirmation === ''
      }) );
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked }, () => this.updateError());
  };

  handle_button_sign_up = async() => {    
    console.log("handle_button_sign_up");
    
    const { userName, email, password } = this.state;    
    // 이메일 중복 확인
    {
      const params = {
        email: email
      };
      console.log(params);
      const recv = await network("/webTest/webStudio/v2/studio/emailCheck", "post", params);
      console.log(recv);
      if(recv.status === "fail") {
        this.setState({emailError: 'Error__Code__9011', buttonDisable: true});
        return;
      }
    }

    // 닉네임 중복 확인
    {
      const params = {
        name: userName
      };
      console.log(params);
      const recv = await network("webTest/webStudio/v2/studio/nameCheck", "post", params);
      console.log(recv);
      if(recv.status === "fail") {
        this.setState({userNameError: 'Error__Code__9012', buttonDisable: true});
        return;
      }
    }
    {
      const params = {
        email: email,
        password: password,
        name: userName,
        loginType: "email",
      };
      console.log(params);
      const recv = await network("/webTest/webStudio/v2/studio/join", "post", params);
      console.log(recv);
      this.process_result_signup(recv);
    }
  }

  onTextChange = name => event => {
    if(name === 'userName' || name === 'email') {
      this.setState({userNameError: '', emailError: '',});
    }
    this.setState({ [name]: event.target.value }, () => this.updateError());
  }


  handle_onGoogleClick = async() => {
    console.log('Sign up');
    console.log('signupGoogle');
    const params = await signPopupGoogle();
    console.log(params);

    const recv = await network("/webTest/webStudio/v2/studio/join", "post", params);
    console.log(recv);
    this.process_result_signup(recv);
  }

  handle_onFacebookClick = async() => {
    console.log('Sign up');
    console.log('signupFacebook');
    const params = await signPopupFacebook();
    console.log(params);

    const recv = await network("/webTest/webStudio/v2/studio/join", "post", params);
    console.log(recv);

    this.process_result_signup(recv);
  }

  process_result_signup = (recv) => {    
    const { UiActions } = this.props;
    const { userName, email, password } = this.state;    
    // TODO : 회원가입 처리
    if(recv.status === "success") {      
      UiActions.setLoginEmail({login_email:email});    
      UiActions.setLoginMenu({login_menu:11});          

    }
    else { // 에러 처리

    }
  }

  handle_button_go_login = () => {
    Router.pushRoute('login');  
  }

  handle_button_resend = async() => {

      
     // 메일 다시 보내기
     const { login_email } = this.props;
     console.log(login_email);
     {
      const params = {
        email: login_email
      };
      console.log(params);
      const recv = await network("/webTest/webStudio/v2/studio/authEmailSend", "post", params);
      console.log(recv);

      if(recv.status === "success") {
        
      } 
      else if(recv.status === "fail") {        
        
      }
    }
  }
  /////////////////////////////////////
  send_authEmail = async() => {
    
      const { token , type } = this.props;    
      const params = {
        token: token
      };
      console.log(params);
      const recv = await network("/webTest/webStudio/v2/studio/authEmail", "post", params);
      console.log(recv);

      if(recv.status === "success") {
        console.log("send_authEmail sucess");
      } 
      else if(recv.status === "fail") {        
        console.log("send_authEmail Error ");
        Router.pushRoute('signup_done_verified_error');  
      }
  }

  ////////////////////////////////////////////////////////////////////////////////////////



  draw_sign_up = () => {
    const { language } = this.props;
    const { userName, email, password, passwordConfirmation, userNameError, emailError, passwordError, passwordConfirmationError, buttonDisable } = this.state;
    return (
      <div align="center" className={cx('Popup__Inner', 'Signup')}>        
        <div className = { cx('Popup__Inner__Div')}>       
          <LoginMenu rightTitle='SignUp__Tab' /> 
          <div className = { cx('Popup__Inner__Box')}>                   
            <LoginTextField onChange={this.onTextChange('userName')} vaule={userName} title="SignUp__UserName__Title" errorTxt={userNameError} />
            <LoginTextField onChange={this.onTextChange('email')} vaule={email} title="SignUp__Email__Title" errorTxt={emailError} />
            <LoginTextField type='password'  onChange={this.onTextChange('password')} vaule={password} title="SignUp__Password__Title" errorTxt={passwordError} />
            <LoginTextField type='password'  onChange={this.onTextChange('passwordConfirmation')} vaule={passwordConfirmation} title="SignUp__Password__Confirmation__Title" errorTxt={passwordConfirmationError} />

            <div className = { cx('Signup_agree_line')}>       
              
              <Checkbox
                className = { cx('Signup_Checkbox') }
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}                 
                value="checkedA"
                icon={<RadioButtonUncheckedIcon  />}
                checkedIcon={ <img src='/static/images/Login/confirm.svg'  /> }
              />
              <Typography className = { cx('Signup_agree') } > {ReactHtmlParser(getLanguage("SignUp__Agree__Title",language))}</Typography> 
            </div>
            <div className = { cx('Signup_agree_br')} />
            <BottomLogin disabled={buttonDisable} buttonName="SignUp__Button" onGoogleClick = { this.handle_onGoogleClick } onFacebookClick = { this.handle_onFacebookClick }  onHandleClick = { this.handle_button_sign_up } />
          </div>
        </div>
        <div className = { cx('Signup_br')} />
      </div>      
    );
  }

  draw_sign_up_verified = () => {
    const { language } = this.props;
    return ( 
        <div align="center" className = { cx('Popup__Inner', 'SignupDone')}>        
          <div className = { cx('Popup__Inner__Div')}>      
            <LoginMenu rightTitle="SignUp__Tab"  />   
            <div className = { cx('Popup__Inner__Box')}>                                
                <Typography className = { cx('Signup_done_desc') } > 
                  {ReactHtmlParser(getLanguage("SignUpCheck__Desc", language))}
                </Typography>                     
            </div>
          </div>        
      </div>      
    );
  }

  draw_sign_up_verified_error = () => {
    const { language } = this.props;
    return ( 
        <div align="center" className = { cx('Popup__Inner','SignupDone')}>        
          <div className = { cx('Popup__Inner__Div')}>      
            <LoginMenu rightTitle="SignUp__Tab"  />   
            <div className = { cx('Popup__Inner__Box')}>                                
                <Typography className = { cx('Signup_done_desc') } > 
                  {ReactHtmlParser(getLanguage("SignUpCheck__Tokon_Error", language))}
                    <Button 
                    disableRipple
                    className = { cx('Signup_done_desc3') }
                    onClick = { this.handle_button_go_login } 
                  > 
                   { getLanguage("SignUpDone__Desc__4", language) }
                  </Button>
                </Typography>                     
            </div>
          </div>        
      </div>      
    );
  }

  draw_sign_up_done = () => {
    const { language } = this.props;
    return ( 
        <div align="center" className = { cx('Popup__Inner', 'SignupDone')}>        
          <div className = { cx('Popup__Inner__Div')}>      
            <LoginMenu rightTitle="SignUp__Tab" />   
            <div className = { cx('Popup__Inner__Box')}>                                
              <Typography className = { cx('Signup_done_desc') } > 
                {ReactHtmlParser(getLanguage("SignUpDone__Desc__1", language))}
              </Typography>   
              <br/>
              <Typography className = { cx('Signup_done_desc2') } > 
                {ReactHtmlParser(getLanguage("SignUpDone__Desc__2", language))}

                <Button 
                  disableRipple
                  className = { cx('Signup_done_desc3') }
                  onClick = { this.handle_button_resend } 
                > 
                  { getLanguage("SignUpDone__Desc__3", language) }
                </Button>

              </Typography>             

              
            </div>
          </div>        
      </div>      
    );
  }


  render() {  
    const { type } = this.props; 
    return (        
      <div>
        { type === 0 && this.draw_sign_up() }
        { type === 1 && this.draw_sign_up_done() }
        { type === 2 && this.draw_sign_up_verified() }       
        { type === 3 && this.draw_sign_up_verified_error() }       
      </div>
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),
    language: state.ui.get('ui').get('language'),   
    token: state.ui.get('ui').get('token'),   
    login_email: state.ui.get('ui').get('login_email'),   
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch),    
  })
)(Signup);