import React from 'react';

import classNames from 'classnames/bind';
import styles from './TopUnderMenu.scss';
const cx = classNames.bind(styles);

import { Link } from '@common/routes';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, Dialog } from '@material-ui/core/';

class TopUnderMenu extends React.Component {
    render() {
        const { menu, languageName, language, anchorEl, handleMenuChange, handleCloseMobileMenu, handleButtonClick, handleButtonClose } = this.props;
        return (
            <div className = { cx('TopMenu')}>     { /* 새로운 창이라서 topmenu 안에서 해야 css 값 가져온다. */}
                <div className = { cx('TopMenu__Popup__Wrp')} >
                    <img className={cx("TopMenu__Logo__Mobile__Popup")} src='/static/images/logo-pink.svg'  />
                    <img className={cx('TopMenu__Logo__Mobile__Popup__Studio')} src='/static/images/tag-studio.png' />                       
                    <Button disableRipple onClick={handleCloseMobileMenu} className = { cx('TopMenu__Mobile__Popup__Close')} >
                        <img src='/static/images/Common/close.svg' />
                    </Button>

                    <Button
                        className = { cx('TopMenu__Select', 'TopMenu__Select_Under')} 
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={handleButtonClick}
                    >
                        {languageName} 
                        {
                            <img src='/static/images/gray_arrow.svg'  className = { cx('TopMenu__UnderArrow')}  />
                        }                
                    </Button>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={ e=> handleButtonClose('')}
                    >
                        <MenuItem onClick={ e=> handleButtonClose('eng')}> English </MenuItem>
                        <MenuItem onClick={ e=> handleButtonClose('kor')}> 한글 </MenuItem>          
                    </Menu>

                    <div className = { cx('TopMenu__Button__Div__Under')}> 
                        <Link route="home">
                            <a className={cx('TopMenu__Link', 'TopMenu__Popup__Under', menu === 0 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__Home", language)} </a>
                        </Link>

                        <Link route="howtocreate">
                            <a className={cx('TopMenu__Link', 'TopMenu__Popup__Under', menu === 1 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__HowToCreate", language)} </a>
                        </Link>

                        <Link route="pricing">
                            <a className={cx('TopMenu__Link', 'TopMenu__Popup__Under', menu === 2 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__Pricing", language)} </a>
                        </Link>

                        <Link route="login">
                            <a className={cx('TopMenu__Link', 'TopMenu__Popup__Under', menu === 3 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__Login", language)} </a>
                        </Link>
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
)(TopUnderMenu);