import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_TextField.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

const TextFieldstyles = theme => ({
  cssOutlinedInput: {
      height:'50px',
      marginTop:'-7px',
      '&$cssFocused $notchedOutline': {
        borderColor:  '#ff3b94',
      },
  },

  cssOutlinedInput_Multi: {        
      '&$cssFocused $notchedOutline': {
        borderColor:  '#ff3b94',
      },
  },

  cssFocused: {},
  notchedOutline: {
      borderRadius: '10px',
  },
});

class Upload_TextField extends React.Component {

  render() {          
    const { classes, title, desc, comp_height, language } = this.props;      

    return (      
        <div className = { cx('Upload_TextField')} >
            
            <div className = { cx('Upload_TextField_div')}>
                <div className = { cx('Upload_TextField_left_div')}>
                   <Typography className = { cx('Upload_TextField_title') } > { title } </Typography>                
                </div>

                <div className = { cx('Upload_TextField_left_right')}>
                    <TextField                                                       
                        margin="normal"
                        variant="outlined"
                        fullWidth        
                        className={cx('LoginTextField_Typo') }                        
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                   <Typography className = { cx('Upload_TextField_desc') } > { desc } </Typography>                                    
                </div>
            </div>
        </div>
    );
  }
}

export default withStyles(TextFieldstyles)(connect(
    (state) => ({
        language: state.ui.get('ui').get('language'),    
    }),
)(Upload_TextField));

