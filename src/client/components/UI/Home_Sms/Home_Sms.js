import React from 'react';

import classNames from 'classnames/bind';
import styles from './Home_Sms.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';

import Logo from '@static/images/logo-pink.svg';
import Studio from '@static/images/tag-studio.svg';
import UnderArrow from '@static/images/gray_arrow.svg';

import { createMuiTheme } from '@material-ui/core/';    

import { UnderScreen , OverScreen } from '@components/Common/Responsive_utilities';

const MENU_IDS = ['how to upload','pricing','about stipop','login / signup'];

const whiteTheme = createMuiTheme({ palette: { primary: { main:'#ff3b94'} } ,  typography: { useNextVariants: true } })     // 버튼 흰색 처리

class Home_Sms extends React.Component {
  render() {            
    const { language } = this.props;
    return (        
      <div className = { cx('Home_Sms')}>
          <OverScreen>
            <div className = { cx('Home_Sms_Images')} >
              <img src='/static/images/Home/messanger.svg' />
              <img src='/static/images/Home/instagram.svg' />
              <img src='/static/images/Home/lighting.svg' />
              <img src='/static/images/Home/ghost.png' />
              <img src='/static/images/Home/twitter.svg' />
              <img src='/static/images/Home/etc.svg' />
            </div>
          </OverScreen>
          <UnderScreen>
            <div className = { cx('Home_Sms_Images')} >
              <div className = { cx('Home_Sms_Images_Div')}>
                <img src='/static/images/Home/messanger.svg' />
                <img src='/static/images/Home/instagram.svg' />
                <img src='/static/images/Home/lighting.svg' />
              </div>
              <div className = { cx('Home_Sms_Images_Div')}>
                <img src='/static/images/Home/ghost.png' />
                <img src='/static/images/Home/twitter.svg' />
                <img src='/static/images/Home/etc.svg' />
              </div>
            </div>
          </UnderScreen>
        <div>
            <Typography className={cx('Home_Sms_Desc')} >{ReactHtmlParser(getLanguage("Home__2__Title", language))} </Typography>                     
        </div>       
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    language: state.ui.get('ui').get('language'),
  })
)(Home_Sms);