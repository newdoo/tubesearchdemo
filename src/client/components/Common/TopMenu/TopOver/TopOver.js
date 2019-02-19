import React from 'react';

import classNames from 'classnames/bind';
import styles from './TopOver.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

//link
import { Link } from '@common/routes';

import { getLanguage } from '@lib/language';

class TopOver extends React.Component {
    render() {
        const { menu, language, languageName, anchorEl, handleButtonClick, handleButtonClose } = this.props;
        return (
            <div className={cx('TopMenu')}>     
                <div className={cx('TopMenu__Div')}>     

                    <div className={cx('TopMenu__Left')}>
                        <Link route='home'>              
                            <img src='/static/images/logo-pink.svg' />  
                        </Link>
                        <Link route='home'>
                            <img className={cx('TopMenu__Studio')} src='/static/images/tag-studio.png'  />
                        </Link>     

                        <Button
                            className={cx('TopMenu__Select')} 
                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={handleButtonClick}
                        >
                        {languageName}                  
                            <img src='/static/images/gray_arrow.svg' className={cx('TopMenu__UnderArrow')} />
                        </Button>

                        { /*  English 한국어 선택 화면*/}
                        <Menu              
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={ e=> handleButtonClose('')}
                        >
                            <MenuItem className='menu-font' onClick={ e=> handleButtonClose('eng')}> English </MenuItem>
                            <MenuItem className='menu-font' onClick={ e=> handleButtonClose('kor')}> 한글 </MenuItem>          
                        </Menu>                   
                    </div>
                    <div align="right" className={cx('TopMenu__Button__Div')}> 
                        <Link route="home">
                            <a className={cx('TopMenu__Link', menu === 0 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__Home", language)} </a>
                        </Link>

                        <Link route="howtocreate">
                            <a className={cx('TopMenu__Link', menu === 1 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__HowToCreate", language)} </a>
                        </Link>

                        <Link route="pricing">
                            <a className={cx('TopMenu__Link', menu === 2 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__Pricing", language)} </a>
                        </Link>

                        <Link route="login">
                            <a className={cx('TopMenu__Link', menu === 3 ? 'TopMenu__Select__Menu' : '')}> {getLanguage("TopMenu__Login", language)} </a>
                        </Link>
                    </div>
                            
                </div>
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
    })
)(TopOver);