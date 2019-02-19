import React from 'react';

import classNames from 'classnames/bind';
import styles from './LoginMenu.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';


import { Link } from '@common/routes';

class LoginMenu extends React.Component {

    draw_Login_Link = () => {
        const { login_menu , rightTitle, language } = this.props;        
        if(login_menu === 0 || login_menu === 1) {
            return (
                <Link route="login">                       
                    <a  className ={cx('Login_link')}> { getLanguage("Login__Tab", language) } </a>                    
                </Link>
            );
        }
        else {
            return (
                <div className ={cx('Login_link')}>
                   {getLanguage("Login__Tab", language)}
                </div>
            );
        }
    }

    draw_Signup_Link = () => {
        const { login_menu , rightTitle, language } = this.props;        

        console.log("rightTitle=" + rightTitle );
        if(login_menu === 0 || login_menu === 1) {
            return (
                <Link route="signup">
                            <a  className ={cx('Login_link')}> 
                                { getLanguage(rightTitle, language) }
                            </a>
                </Link>
            );
        }
        else {
            return (
                <div className ={cx('Login_link')}>
                { getLanguage(rightTitle, language) }                
                </div>
            );
        }
    }

    login_Left_Click = () => {
        console.log("left");
        const { UiActions } = this.props;
        UiActions.setLoginMenu_Left({login_left: true });
    }

    login_Right_Click = () => {
        console.log("right");
        const { UiActions } = this.props;
        UiActions.setLoginMenu_Left({login_left: false });
    }

    render() {
        const { login_menu , rightTitle, language , login_left } = this.props;        
        return (
            <div className={cx('LoginMenu')}>    
                <div className={cx('LoginMenu__Div')}>
                    <div className = { cx('Login_menu' , login_left === true ?'Login_menu_select':'' )}>                        
                        <div className ={cx('Login_link')} onClick = { this.login_Left_Click } >
                            {getLanguage("Login__Tab", language)}
                        </div>

                    </div>

                    <div className = { cx('Login_menu' , login_left === false ?'Login_menu_select_right':'' )}>                        
                        <div className ={cx('Login_link')} onClick = { this.login_Right_Click }>
                            { getLanguage(rightTitle, language) }                
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}

export default connect(
    (state) => ({
        login_menu:state.ui.get('ui').get('login_menu'),
        login_left:state.ui.get('ui').get('login_left'),        
        language: state.ui.get('ui').get('language'), 
    }),
    (dispatch) => ({
        UiActions: bindActionCreators(uiActions, dispatch),    
    })
)(LoginMenu);