import React from 'react';

import classNames from 'classnames/bind';
import styles from './TotalList.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';
import Total_Line from '@components/UI/Analytics/Total_Line';


const cx = classNames.bind(styles);

const Total_Data = [ 
  { title:'Total' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  { title:'Pineapple' , image: '' },
  
];

class TotalList extends React.Component {

  render() {        
    return (        
      <div className = { cx('TotalList')}>
        <div className = { cx('TotalList_div')} >  
        {
            Total_Data.map(( data ,i) => (
              <Total_Line title = { data.title }  image = { data.image }/>
              ))
        }
        </div>
      </div>      
    );
  }
}

export default TotalList;
