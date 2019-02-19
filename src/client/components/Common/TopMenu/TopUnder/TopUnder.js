import React from 'react';

import classNames from 'classnames/bind';
import styles from './TopUnder.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, Dialog } from '@material-ui/core/';
import Slide from '@material-ui/core/Slide';
function Transition(props) {
    return <Slide direction="down" {...props} />;
}

import { Link } from '@common/routes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

import TopUnderMenu from '@components/Common/TopMenu/TopUnderMenu';

class TopUnder extends React.Component {

    handleOpenMobileMenu = () => {
        const { UiActions } = this.props;
        UiActions.setMobileMenu({mobile_menu: true});
    }

    handleCloseMobileMenu = () => {
        const { UiActions } = this.props;
        UiActions.setMobileMenu({mobile_menu: false});
    }

    render() {
        const { menu, mobile_menu, languageName, anchorEl, handleButtonClose, handleButtonClick } = this.props;
        return (
            <div className={cx('TopMenu')}>
                <div className={cx('TopMenu__Div')}>   
                    <Link route='home'>
                        <img className={cx('TopMenu__Logo')} src='/static/images/logo-pink.svg' />            
                    </Link>
                    <Link route='home'>
                        <img className={cx('TopMenu__Studio')} src='/static/images/tag-studio.png' />
                    </Link>     
                    <Button disableRipple color="primary" className={cx('TopMenu__Under__Button')} onClick={this.handleOpenMobileMenu} >                 
                        <img src='/static/images/Common/menu.svg' />         
                    </Button>
                    <Dialog
                        fullScreen={true}
                        open={mobile_menu}
                        TransitionComponent={Transition}
                        onClose={this.handleCloseMobileMenu}          
                    >
                        <TopUnderMenu
                            menu={menu}
                            mobile_menu={mobile_menu}
                            languageName={languageName}
                            anchorEl={anchorEl}                        
                            handleCloseMobileMenu={this.handleCloseMobileMenu} 
                            handleButtonClick={handleButtonClick}
                            handleButtonClose={handleButtonClose}
                        />
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        mobile_menu: state.ui.get('ui').get('mobile_menu'),    
    }),
    (dispatch) => ({
        UiActions: bindActionCreators(uiActions, dispatch),    
    })
)(TopUnder);