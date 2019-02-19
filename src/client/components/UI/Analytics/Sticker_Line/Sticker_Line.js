import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Line.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);
import { connect } from 'react-redux';

class Sticker_Line extends React.Component {

  render() {        
    
    const { title , image } = this.props;    
    return (        
      <div className = { cx('Sticker_Line')}>
          <Typography className = { cx('Sticker_Line_title') } >  { title } </Typography>                               
      </div>      
    );
  }
}

export default Sticker_Line;

