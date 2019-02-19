import React from 'react';

import classNames from 'classnames/bind';
import styles from './Reaction.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Line_Evently from '@components/Common/Line_Evently';


class Reaction extends React.Component {


  draw_sentense = ( left , right  ) => {
    return (
        <Line_Evently comp_height = { 24 }  >
          <div>
            <Typography className = { cx('Reaction_left') } >  { left } </Typography>                     
           
          </div>

          <div>           
            <Typography className = { cx('Reaction_right') } >  { right } </Typography>   
          </div>
      </Line_Evently>
    );
  }


  render() {            
    const { menu } = this.props;
    return (        
      <div className = { cx('Reaction')}>       
                 <Line_Evently align="top" comp_height = { 32 } >
                  <div >
                    <Typography className = { cx('Reaction_title') } >  Reaction to your lastest work </Typography>                     
                  </div>
                </Line_Evently>

                <div className = { cx('Reaction_content') } >
                  <div className = { cx('Reaction_content_left') }>
                    <Typography className = { cx('Reaction_name') } >  Racoon </Typography>      
                    <img src='/static/images/LoginedHome/temp.jpg' className = { cx('Reaction_image') }  />               
                  </div>

                  <div className = { cx('Reaction_content_right') }>
                  { this.draw_sentense('View'  , '42') }
                  { this.draw_sentense('Like'  , '33') }
                  { this.draw_sentense('Download'  , '22') }                
                  { this.draw_sentense('Revenue'  , '$10.00') }                
                  </div>

              </div>

      </div>      
    );
  }
}

export default Reaction;
