import React from 'react';

import classNames from 'classnames/bind';
import styles from './Letter.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Letter_Send_Textfield from '@components/Common/Letter/Letter_Send_TextField';
import Letter_Reader from '@components/Common/Letter/Letter_Reader';

class Letter extends React.Component {

  render() {        
    const { classes } = this.props;

    return (        
      <div className = { cx('Letter')} >     
          <div align="right">
              <img src='/static/images/Common/close.svg' className = { cx('Letter_close')} />
          </div>

          <div className = { cx('Letter_div')} > 
            <div className = { cx('Letter_left')}>
                <Letter_Reader />
            </div>

            <div className = { cx('Letter_right')}>
                <Letter_Send_Textfield />
            </div>

          </div>

      </div>      
    );
  }
}

export default Letter;

