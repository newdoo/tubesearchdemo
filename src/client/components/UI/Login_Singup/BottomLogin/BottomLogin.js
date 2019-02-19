import React from 'react';

import classNames from 'classnames/bind';
import styles from './BottomLogin.scss';
const cx = classNames.bind(styles);

import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select } from '@material-ui/core/';

import Line_Evently from '@components/Common/Line_Evently';

import { Router } from '@common/routes';
import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';


class BottomLogin extends React.Component {
    render() {        
        const { buttonName, onlyButton, language, disabled } = this.props;
        const { onHandleClick, onGoogleClick , onFacebookClick } = this.props;

        return (
            <div className={cx('BottomLogin')}>
                <div className={cx('BottomLogin__Wrp')}>
                    <div className={cx('BottomLogin__SNS')}>
                        {onlyButton === undefined 
                        ?
                        <React.Fragment>
                            <Button
                                className={cx('BottomLogin_select')}  
                                onClick={ onGoogleClick  }  
                            >             
                                <img src='/static/images/Login/google.svg' className={cx('BottomLogin_button_icon')} />
                                Google
                            </Button>

                            <Button
                                className = { cx('BottomLogin_select')}     
                                onClick={ onFacebookClick  }              
                            >             
                                <img src='/static/images/Login/facebook-circle.svg' className={cx('BottomLogin_button_icon')} />
                                Facebook
                            </Button>
                        </React.Fragment>
                        :<div></div>
                        }
                    </div>
                    <div className={cx('BottomLogin__Button')}>
                        <Button
                            className={cx('BottomLogin_pink_button')}     
                            onClick={onHandleClick }  
                            disabled={disabled}
                            variant="contained"
                            fullWidth={true}
                        > 
                            {getLanguage(buttonName, language)} 
                        </Button>
                    </div>
                </div>
            </div>
        );    
    }
}

export default connect(
    (state) => ({
        language: state.ui.get('ui').get('language'),    
    }),
)(BottomLogin);



