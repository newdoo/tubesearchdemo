import React from 'react';

import classNames from 'classnames/bind';
import styles from './Fellow.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';


class Fellow extends React.Component {


  draw_sentense = ( left , right ) => {
    return (
        <Line_Evently comp_height = { 33 }  >
          <div>
            <Typography className = { cx('Total_left_title') } >  { left } </Typography>                     
          </div>

          <div>
            <Typography className = { cx('Total_right') } >  { right } </Typography>   
          </div>
      </Line_Evently>
    );
  }


  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('Total')}>       
                 <Line_Evently align="top" comp_height = { 42 } >
                  <div >
                    <Typography className = { cx('Total_title') } >  Fellow artist </Typography>                     
                  </div>
                </Line_Evently>

                { this.draw_sentense('View','201,012') }
                { this.draw_sentense('Like','2,503') }
                { this.draw_sentense('DownLoad','540') }
                { this.draw_sentense('Revenue','$120.00') }
                { this.draw_sentense('Follower','351,287') }


      </div>      
    );
  }
}

export default Fellow;
