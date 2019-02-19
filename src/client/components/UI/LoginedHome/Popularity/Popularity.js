import React from 'react';

import classNames from 'classnames/bind';
import styles from './Popularity.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Line_Evently from '@components/Common/Line_Evently';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries , GradientDefs , linearGradient , AreaSeries , VerticalGridLines  } from 'react-vis';


class Popularity extends React.Component {
  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('Popularity')}>       
          <Line_Evently align="top" comp_height = { 42 } >
            <div >
              <Typography className = { cx('Popularity_title') } >  Popularity </Typography>                     
            </div>
          </Line_Evently>

          <div className = { cx('Popularity_chart')}>   
             <XYPlot width={344} height={170}>          
              <GradientDefs>
                <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ff68ac" stopOpacity={1.0}/>
                  <stop offset="100%" stopColor="#ffcdcd" stopOpacity={1.0} />
                </linearGradient>
              </GradientDefs>

            
              <AreaSeries            
                curve="curveNatural"
                color={'url(#CoolGradient)'}
                data={
                        [                        
                            {x: 1, y: 4 , y0: 0},
                            {x: 2, y: 3 , y0: 0}, 
                            {x: 3, y: 4 , y0: 0},
                            {x: 4, y: 5 , y0: 0},
                            {x: 5, y: 4 , y0: 0},
                            {x: 6, y: 3 , y0: 0},
                        ]
                      }              
                />
            </XYPlot>
          </div>

         

      </div>      
    );
  }
}

export default Popularity;
