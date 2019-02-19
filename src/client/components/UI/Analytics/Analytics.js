import React from 'react';

import classNames from 'classnames/bind';
import styles from './Analytics.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';

import Logo from '@static/images/logo-pink.svg';
import Studio from '@static/images/tag-studio.svg';
import UnderArrow from '@static/images/gray_arrow.svg';

import { createMuiTheme } from '@material-ui/core/';    

const MENU_IDS = ['how to upload','pricing','about stipop','login / signup'];


const whiteTheme = createMuiTheme({ palette: { primary: { main:'#ff3b94'} } ,  typography: { useNextVariants: true } })     // 버튼 흰색 처리







import Total_Chart from '@components/UI/Analytics/Total_Chart';



import TotalList from '@components/UI/Analytics/TotalList';
import ReplayList from '@components/UI/Analytics/ReplayList';
import StickerList from '@components/UI/Analytics/StickerList';

class Analytics extends React.Component {

  render() {            
    return (        
      <div className = { cx('Analytics')}>
          <TotalList />

          <div className = { cx('Analytics_total_right')} >            
            <div className = { cx('Analytics_total_chart')} >
                <Total_Chart />
            </div>

            <div className = { cx('Analytics_total_right_bottom')} >
              <div className = { cx('Analytics_total_reply')} >
                <ReplayList />
              </div>

              <div className = { cx('Analytics_total_yourTop')} >
                  <StickerList/>
              </div>
            </div>
          </div>


      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
  }),null  
)(Analytics);

