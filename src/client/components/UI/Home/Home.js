import React from 'react';

import classNames from 'classnames/bind';
import styles from './Home.scss';
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

const MENU_IDS = ['how to upload','pricing','about stipop','login / signup'];

const whiteTheme = createMuiTheme({ palette: { primary: { main:'#ff3b94'} } ,  typography: { useNextVariants: true } })     // 버튼 흰색 처리

import { UnderScreen , OverScreen } from '@components/Common/Responsive_utilities';

class Center extends React.Component {

  render() {        
    const { language } = this.props;
    return (        
      <div className = { cx('Home')}>
        <div className = { cx('Center_bg_div')}> 
          <div className = { cx('Center_left_div')} >
            <img src='/static/images/center_bg.png' className = { cx('Center_bg')} />
          </div>
          <div className = { cx('Center_right_div')} >
            <div className = { cx('Center_right_title')} >
              {ReactHtmlParser(getLanguage("Home__1__Title", language))}
            </div>

            <div className = { cx('Center_right_desc')} >
              {ReactHtmlParser(getLanguage("Home__1__Desc", language))}
            </div>
            
            <div>
            <MuiThemeProvider theme={whiteTheme}>
              <Link route='login'>
                <Button variant="outlined" color="primary" className={cx('Center_right_startButton')} >{getLanguage("Home__1__Button", language)}</Button>  
              </Link>              
            </MuiThemeProvider>
            </div>
           </div>
        </div>

        {/* <div className = { cx('Center_br')} /> */}

      </div>      
    );
  }
}

export default connect(
  (state) => ({
    language: state.ui.get('ui').get('language'),
  })
)(Center);

