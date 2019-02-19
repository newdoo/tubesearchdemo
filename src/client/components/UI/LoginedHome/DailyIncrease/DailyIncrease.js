import React from 'react';

import classNames from 'classnames/bind';
import styles from './DailyIncrease.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';


class DailyIncrease extends React.Component {


  draw_sentense = ( left , right ) => {
    return (
        <Line_Evently comp_height = { 33 }  >
          <div>
            <Typography className = { cx('DailyIncrease_left') } >  { left } </Typography>                     
          </div>

          <div>
            <Typography className = { cx('DailyIncrease_right') } >  { right } </Typography>   
          </div>
      </Line_Evently>
    );
  }


  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('DailyIncrease')}>       
                 <Line_Evently align="top" comp_height = { 42 } >
                  <div >
                    <Typography className = { cx('DailyIncrease_title') } >  Daily increase </Typography>                     
                  </div>
                </Line_Evently>

                { this.draw_sentense('View','+2') }
                { this.draw_sentense('Like','+2') }
                { this.draw_sentense('DownLoad','+10') }
                { this.draw_sentense('Revenue','+2') }
                { this.draw_sentense('Follower','+6') }


      </div>      
    );
  }
}

export default DailyIncrease;
