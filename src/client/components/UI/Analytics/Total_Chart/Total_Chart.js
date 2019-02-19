import React from 'react';

import classNames from 'classnames/bind';
import styles from './Total_Chart.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries , GradientDefs , linearGradient , AreaSeries , VerticalGridLines , MarkSeries , CustomSVGSeries   } from 'react-vis';

import Line_Evently from '@components/Common/Line_Evently';

const myData = [
  {x: 3, y: 9, size: 30},
  {x: 3, y: 9, size: 10},    
  {x: 3, y: 9, size: 13},    
  {x: 3, y: 9, size: 25},    
]

const myData2 = [  
  {x: 3, y: 9, size: 20},    
]

const myData3 = [  
  {x: 3, y: 9, customComponent: (row, positionInPixels) => {
    return (
      <g className="inner-inner-component">        
        <text x={0} y={0}>
          <tspan x="20" y="5">{ `${row.y}`}</tspan>          
        </text>
      </g>
    );
  }}
]


class Total_Chart extends React.Component {

  getX = (v) => {
    switch(v) {
      case 1:
          return 'Jan';
          break;
      case 2:
          return 'Feb';
          break;     
      case 3:
          return 'Mar';
          break;     
      case 4:
          return 'Apr';
          break;     
      case 5:
          return 'May';
          break;     
      case 6:
          return 'Jun';
          break;     
      case 7:
          return 'Jul';
          break;     
      case 8:
          return 'Aug';
          break;     
     case 9:
          return 'Sep';
          break;     
     case 10:
          return 'Oct';
          break;     
      case 11:
          return 'Nov';
          break;     
     case 12:
          return 'Dec';
          break;     

           return 'Jan';
    }
  }

  render() {            
    const { title , image } = this.props;    
    return (        
          <div className = { cx('Total_Chart')}>   

            <Line_Evently>
              <div>
                <Button
                      className = { cx('Total_Chart_select')}                   
                >
                  download
                  </Button>
              </div>

              <div>
              <Button>
                <img src='/static/images/Common/down.svg' />
                </Button>
              </div>
            </Line_Evently>

            <div className = { cx('Total_buttons_div')} > 
              <Button className = { cx('Total_buttons')} >
                Week
              </Button>
              
              <Button className = { cx('Total_buttons')} >
                1M
              </Button>
              
              <Button className = { cx('Total_buttons')} >
                1Y
              </Button>
            
              <Button className = { cx('Total_buttons')} >
                MAX
              </Button>
            </div>


            <XYPlot width={688} height={270}>          
            
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
                          {x: 1, y: 3 , y0: 0 },
                          {x: 2, y: 5 , y0: 0 }, 
                          {x: 3, y: 9 , y0: 0 },
                          {x: 4, y: 4 , y0: 0 },
                          {x: 5, y: 2 , y0: 0 },
                          {x: 6, y: 6 , y0: 0 },
                          {x: 7, y: 5 , y0: 0 },
                          {x: 8, y: 4 , y0: 0 },
                          {x: 9, y: 3 , y0: 0 },
                          {x: 10, y: 2 , y0: 0 },
                          {x: 11, y: 1 , y0: 0 },
                          {x: 12, y: 2 , y0: 0 },
                      ]
                    }              
              />
              <XAxis left = { 30 } tickFormat={v => this.getX(v) }  hideLine className = { cx('Total_typo')} color="red" />
              <MarkSeries  data={myData}  opacity={1} color='white' label='woah!'  style={{mark:{stroke: 'yellow'}}} /> 
              <MarkSeries  data={myData2}  opacity={1} color='red' label='woah!' /> 
              <CustomSVGSeries customComponent="square" data={myData3} />
              
          </XYPlot>
      </div>
    );
  }
}

export default Total_Chart;
