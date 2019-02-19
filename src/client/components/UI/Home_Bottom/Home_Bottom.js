import React from 'react';

import classNames from 'classnames/bind';
import styles from './Home_Bottom.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

import { createMuiTheme } from '@material-ui/core/';    
const whiteTheme = createMuiTheme({ palette: { primary: { main:'#ff3b94'} } ,  typography: { useNextVariants: true } })     // 버튼 흰색 처리

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import { Link } from '@common/routes';

class Home_Bottom extends React.Component {

  render() {        
    const { language } = this.props;
    return (        
      <div align="center" className = { cx('Home_Bottom')}>
        <MuiThemeProvider theme={whiteTheme}>
          <Link route='login'>
            <Button variant="outlined" color="primary" className={cx('Home_Bottom_button')} >
              {getLanguage("Home__4__Button", language)}
            </Button> 
          </Link>         
        </MuiThemeProvider>
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    language: state.ui.get('ui').get('language'),
  })
)(Home_Bottom);

