import React from 'react';

import classNames from 'classnames/bind';
import styles from './Account_Left.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';


import Account_TextField from '@components/UI/Account_Popup/Account_TextField';
import Account_Cooperate from '@components/UI/Account_Popup/Account_Cooperate';
import Account_Country from '@components/UI/Account_Popup/Account_Country';

class Account_Left extends React.Component {

  is_Social_login = () => {
    const { login_data  } = this.props;     
    return login_data.LoginType !== 'email';
  }

  render() {          
    const { classes, title, desc, comp_height, language , login_account , login_data , handleChange  } = this.props;      
    // social login 이면 username , password , email 은 비활성화 

    console.log("account left");
    console.log(login_account);

    console.log(login_account.u_name);
    console.log(login_account.u_email);

    if(login_account === '') {
      return (
        <div className = { cx('Account_Left')} >            
        </div>
      );
    }

    return (      
        <div className = { cx('Account_Left')} >            
            <div className = { cx('Account_Left_div')} >            
                <Account_TextField onChange={ handleChange('user_name') }  title='User name' desc='8/40' disable = { this.is_Social_login() } defaultValue = { login_account.u_name  }  />
                <Account_TextField onChange={ handleChange('password') }  title='Password' placeholder='Current password' noti = { true }  disable = { this.is_Social_login() } />
                <Account_TextField onChange={ handleChange('password_new') }  title='' desc='&nbsp;' placeholder='New password'  noti = { true } disable = { this.is_Social_login() } />
                <Account_TextField onChange={ handleChange('email') }  title='Email' desc='&nbsp;'  placeholder='abc@welcome.io' disable = { this.is_Social_login() } defaultValue = { login_account.u_email  }  />
                <Account_Cooperate />
                <Account_Country onChange={ handleChange('country') }  />
                <Account_TextField onChange={ handleChange('paypal_id') }  title='Paypal ID' disable = { false } />

                <Button
                      className = { cx('Account_Left_reload')} 
                      onClick={this.handle_button_Click}
                >
                  <img src='/static/images/Common/reload.svg' />
                  </Button>


            </div>
        </div>
    );
  }
}

export default connect(
    (state) => ({
      language: state.ui.get('ui').get('language'),
      login_account:state.login.get('login').get('login_account'),    
      login_data:state.login.get('login').get('login_data'),    
    })
  )(Account_Left);
  

  