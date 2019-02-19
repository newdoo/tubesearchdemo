import React from 'react';

import classNames from 'classnames/bind';
import styles from './ReplayList.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';
import Replay_Line from '@components/UI/Analytics/Replay_Line';


const cx = classNames.bind(styles);

const ReplayData = [                     
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },                  
  { title:'Pineapple' , image: '' },                  
  { title:'Pineapple' , image: '' },                  
  { title:'Pineapple' , image: '' },                  
];

import Line_Evently from '@components/Common/Line_Evently';

class ReplayList extends React.Component {

  render() {        
    return (        
      <div className = { cx('ReplayList')}>

        <Line_Evently align="top" comp_height = { 42 } >
            <div >
              <Typography className = { cx('ReplayList_title') } >  Replay </Typography>                     
            </div>
          </Line_Evently>


        <div className = { cx('ReplayList_div')} >  
        {
              ReplayData.map(( data ,i) => (
              <Replay_Line title = { data.title }  image = { data.image }/>
              ))
        }
        </div>
      </div>      
    );
  }
}

export default ReplayList;
