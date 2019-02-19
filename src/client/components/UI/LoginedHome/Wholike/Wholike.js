import React from 'react';

import classNames from 'classnames/bind';
import styles from './Wholike.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';


class Wholike extends React.Component {

  state = {
    showIndex: 0,  
  };



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

  handle_left_Click = () => {
    const { showIndex } = this.state;
    this.setState({ showIndex: showIndex - 1 });
  }

  handle_right_Click = () => {
    const { showIndex } = this.state;
    this.setState({ showIndex: showIndex + 1 });
  }

  render() {            
    const { menu } = this.props;
    const { showIndex } = this.state;
    return (        
      <div className = { cx('Total')}>       
                 <Line_Evently align="top" comp_height = { 42 } >
                  <div >
                    <Typography className = { cx('Total_title') } >  Who likes your work </Typography>                     
                  </div>
                </Line_Evently>

                { showIndex }

                {
                  showIndex > 0 && 

                  <Button
                    className = { cx('LoginedTopMenu_select')}                 
                    onClick={this.handle_left_Click}
                  >
                  L
                  </Button>

                }

                {
                  showIndex < 3 && 
                  <Button
                    className = { cx('LoginedTopMenu_select')}                 
                    onClick={this.handle_right_Click}
                  >
                  R
                  </Button>
                }
      </div>      
    );
  }
}

export default Wholike;
