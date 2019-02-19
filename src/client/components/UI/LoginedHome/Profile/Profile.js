import React from 'react';

import classNames from 'classnames/bind';
import styles from './Profile.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries , GradientDefs , linearGradient , AreaSeries , VerticalGridLines , RadialChart  } from 'react-vis';

const cx = classNames.bind(styles);

import Line_Evently from '@components/Common/Line_Evently';

class Profile extends React.Component {
  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('Profile')}>       
          <Line_Evently align="top" comp_height = { 42 } >
            <div >
              <Typography className = { cx('Profile_title') } >  Profile strength</Typography>                     
            </div>
          </Line_Evently>

          <div className = { cx('Profile_chart_div')} >
            <div className = { cx('Profile_chart')}>  
              <RadialChart
              data={
                            [                        
                                {angle: 2 , radius: -1 },
                                {angle: 8 , radius: 10 },                            
                            ]
                          }   

              width={180}
              height={180}
              color={'url(#CoolGradient)'}
              />
            </div> 

             <div className = { cx('Profile_right')}>  
              <Typography className = { cx('Profile_right_title') } >  80% </Typography>                     
              <Typography className = { cx('Profile_right_title') } >  completed </Typography>                     

              <Button
                    className = { cx('Profile_right_button')}                   
                    onClick={this.handle_button_Click}
                    size="small"
              >
                go to your profile
              </Button>
             </div>                           

          </div>
          


      </div>      
    );
  }
}

export default Profile;
