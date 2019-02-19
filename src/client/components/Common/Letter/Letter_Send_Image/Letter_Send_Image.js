import React from 'react';

import classNames from 'classnames/bind';
import styles from './Letter_Send_Image.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select  } from '@material-ui/core/';

const cx = classNames.bind(styles);


class Letter_Send_Image extends React.Component {

  render() {            
    
    return (        
      <div className = { cx('Letter_Send_Image')}>              
        <Button
                className = { cx('Letter_Send_Image_select')}                 
        >
          <img src='/static/images/Common/remove.svg'  className = { cx('underArrow1')} />
        </Button>


        <Button
              className = { cx('Letter_Send_Image_select')} 
        >
            <img src='/static/images/Common/file.svg'  className = { cx('underArrow1')} />
        </Button>

      </div>      
    );
  }
}

export default Letter_Send_Image;

