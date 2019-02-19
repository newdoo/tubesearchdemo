import React from 'react';

import classNames from 'classnames/bind';
import styles from './Letter_Send_TextField.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

import TextField from '@material-ui/core/TextField';

const cx = classNames.bind(styles);


import { withStyles } from "@material-ui/core/styles";

const TextFieldstyles = theme => ({    
    cssOutlinedInput_Multi: {        
        '&$cssFocused $notchedOutline': {
          borderColor:  '#bfbfbf',
        },
    },
    cssFocused: {},
    notchedOutline: {
        borderRadius: '10px',
    },
});

import Letter_Send_Image from '@components/Common/Letter/Letter_Send_Image';

class Letter_Send_TextField extends React.Component {

  render() {        
    const { classes } = this.props;

    return (        
      <div className = { cx('Letter_Send_TextField')} >                 
              <TextField                  
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows="21"
                  fullWidth                  
                  className={cx('Letter_Send_TextField_typo')}    
                  InputProps={{
                      classes: {
                          root: classes.cssOutlinedInput_Multi,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                      },
                  }}                     
              />

            <Letter_Send_Image />
            <div align="right" >
                <Button className = { cx('Letter_Send_pinkButton')} > 
                    Send
                </Button>
           </div>
      </div>      
    );
  }
}

export default withStyles(TextFieldstyles)(Letter_Send_TextField);

