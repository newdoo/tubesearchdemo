import React from 'react';

import classNames from 'classnames/bind';
import styles from './Total_Line.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);
import { connect } from 'react-redux';

class Total_Line extends React.Component {

  render() {        
    
    const { title , image } = this.props;    
    return (        
      <div className = { cx('Total_Line')}>
          <Typography className = { cx('Total_Line_title') } >  { title } </Typography>                               
      </div>      
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
  }),null  
)(Total_Line);

