import React from 'react';

import classNames from 'classnames/bind';
import styles from './Login.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField , Checkbox   } from '@material-ui/core/';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import Line_Evently from '@components/Common/Line_Evently';
import BottomLogin from '@components/UI/Login_Singup/BottomLogin';
import LoginMenu from '@components/UI/Login_Singup/LoginMenu';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';
import * as loginActions from '@store/modules/login';

import LoginTextField from '@components/UI/Login_Singup/LoginTextField';

//link
import { Link , Router  } from '@common/routes';

import { verifyEmail } from '@lib/utils';

import network from '@lib/network';
import { signPopupGoogle, signPopupFacebook } from '@lib/firebase';


class Login extends React.Component {

  state = {
    checkedA: true,  

    email: '',
    password: '',

    emailError: '',
    passwordError: '',

    buttonDisable: true,
  };

  componentDidMount() {
    this.updateError();
  }

  updateError = () => {

    // TODO : 에러 코드 적용
    const { email } = this.state;
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
      pv.passwordError !== '' || 
      pv.emailError !== '' ||
      pv.password === '' ||
      pv.email === ''
    }) );
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handle_button_login = async( event ) => {    
    
    const { email, password, emailError, passwordError, buttonDisable } = this.state; 
     {
      const params = {
        email: email,
        password: password,
        loginType: "email",
      };
      console.log(params);
      const recv = await network("/webTest/webStudio/v2/studio/login", "post", params);
      console.log(recv);

      this.process_result_login(recv);
     
    }  
  };

  handle_onGoogleClick = async() => {
    console.log('Login');
    console.log('signupGoogle');
    const params = await signPopupGoogle();
    console.log(params);

    const recv = await network("/webTest/webStudio/v2/studio/login", "post", params);
    console.log(recv);

    this.setState({email: params.email });
    this.process_result_login(recv);
  }

  handle_onFacebookClick = async() => {
    console.log('Login');
    console.log('signupFacebook');
    console.log("_______________________________1");
    const params = await signPopupFacebook();
    console.log("_______________________________2");
    console.log(params);
    console.log("_______________________________3");

    const recv = await network("/webTest/webStudio/v2/studio/login", "post", params);
    console.log(recv);

    //email 저장
    this.setState({email: params.email });
    this.process_result_login(recv);
  }

  process_result_login = (recv) => {
    const { email, password, emailError, passwordError, buttonDisable } = this.state; 

    console.log("process_result_login email" + email );

    // TODO : 로그인 처리
    if(recv.status === "success") {
      const { UiActions , LoginAction } = this.props;            
      let jsonStr = JSON.stringify(recv);
      let jsonParser = JSON.parse(jsonStr);
      LoginAction.setLoginData({login_data: jsonParser });
      Router.pushRoute('loginedHome');  

    } else if(recv.error === 9001) { // 에러 처리
      this.setState({emailError: ''});
    } else if(recv.error === 9002) { // 에러 처리
      //이메일 인증 실패
      console.log("errir 9002");
      const { UiActions } = this.props;        
      UiActions.setLoginMenu({login_menu:11});    
      UiActions.setLoginEmail({login_email:email});    
      UiActions.setLoginMenu_Left({login_left: false });                 
    }

  }



  onTextChange = name => event => {
    if(name === 'password' || name === 'email') {
      this.setState({passwordError: '', emailError: '',});
    }
    this.setState({ [name]: event.target.value }, () => this.updateError());
  }


  render() {        
    const { language } = this.props;   
    const { email, password, emailError, passwordError, buttonDisable } = this.state; 
    return (        
      <div align="center" className={cx('Popup__Inner', 'Login')}>        
        <div className={cx('Popup__Inner__Div')}>        
          <LoginMenu rightTitle='SignUp__Tab' />
          <div className={cx('Popup__Inner__Box')}>                   

            <LoginTextField onChange={this.onTextChange('email')} vaule={email} title="Login__Email__Title" errorTxt={emailError} />
            <LoginTextField type='password' onChange={this.onTextChange('password')} vaule={password} title="Login__Password__Title" errorTxt={passwordError} />

            <Line_Evently align="top" >
              <div>

                <Link route='forgot_password' passHref >
                    <a> 
                    <Typography className={cx('Login_password')} >{getLanguage("Login__Forgot__Password", language)}</Typography>                     
                    </a>
                </Link>   
              </div>

              <div>
                <Checkbox
                  className = { cx('Login_Checkbox') }
                  checked={this.state.checkedA}
                  onChange={this.handleChange('checkedA')}                 
                  value="checkedA"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={ <img src='/static/images/Login/confirm.svg'  /> }
                />
                <Typography className = { cx('Login_remember') } >{getLanguage("Login__Remember__Me", language)}</Typography> 
              </div>
            </Line_Evently>
            
            <div className = { cx('Login_forget_br')} />
            <BottomLogin disabled={buttonDisable} buttonName="Login__Button" onGoogleClick = { this.handle_onGoogleClick } onFacebookClick = { this.handle_onFacebookClick }  onHandleClick = { this.handle_button_login }  />               
          </div>
        </div>
        <div className = { cx('Login_br')} />
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),
    language: state.ui.get('ui').get('language'),   
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch),    
    LoginAction : bindActionCreators(loginActions, dispatch),    
  })
)(Login);

