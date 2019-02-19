import React from 'react';

import classNames from 'classnames/bind';
import styles from './Yourfan.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';


class Yourfan extends React.Component {


  draw_sentense = ( index , name , download , value  ) => {
    return (
        <Line_Evently comp_height = { 60 }  >
          <div>
            <Typography className = { cx('Yourfan_index') } >  { index } </Typography>                     
            <Typography className = { cx('Yourfan_name') } >  { name } </Typography>                     
          </div>

          <div>
            <Typography className = { cx('Yourfan_download') } >  { download } </Typography>   
            <Typography className = { cx('Yourfan_value') } >  { value } </Typography>   
          </div>
      </Line_Evently>
    );
  }


  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('Yourfan')}>       
                 <Line_Evently align="top" comp_height = { 32 } >
                  <div >
                    <Typography className = { cx('Yourfan_title') } >  Your fan </Typography>                     
                  </div>
                </Line_Evently>

                { this.draw_sentense('1','laitfran'  , 'download','23,230') }
                { this.draw_sentense('2','laitfran'  , 'download','23,230') }
                { this.draw_sentense('3','laitfran'  , 'download','23,230') }                


      </div>      
    );
  }
}

export default Yourfan;
