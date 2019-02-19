import React from 'react';

import classNames from 'classnames/bind';
import styles from './LoginTextField.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

const TextFieldstyles = theme => ({
  cssOutlinedInput: {
      height:'65px',
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

class LoginTextField extends React.Component {

  render() {          
    const { classes, title, errorTxt, comp_height, language, onChange, value, type } = this.props;      
    return (      
        <div className = { cx('LoginTextField') } style = {{ height: comp_height === undefined ? '133px' : comp_height}}>
            <div className = { cx('LoginTextField_inline') }>
                <Typography className = { cx('LoginTextField_Title') } >  {getLanguage(title,language)}  </Typography> 
               { errorTxt !== undefined &&  <Typography className = { cx('LoginTextField_Error') } >  {getLanguage(errorTxt,language)}  </Typography>  }  
            </div>

            
            <TextField                                               
                margin="normal"
                variant="outlined"
                fullWidth        
                className={cx('LoginTextField_Typo') }
                onChange={onChange}
                value={value}       
                type={ type === undefined ?'string':type }          
                InputProps={{
                    classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                    },
                }}
            />
        </div>
    );
  }
}

export default withStyles(TextFieldstyles)(connect(
    (state) => ({
        language: state.ui.get('ui').get('language'),    
    }),
)(LoginTextField));

