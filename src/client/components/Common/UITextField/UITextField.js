import React from 'react';

import classNames from 'classnames/bind';
import styles from './UITextField.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

const TextFieldstyles = theme => ({
    cssOutlinedInput: {
        height:'65px',
        '&$cssFocused $notchedOutline': {
            borderColor: '#039be5',
        },
    },

    cssOutlinedInput_Multi: {        
        '&$cssFocused $notchedOutline': {
            borderColor: '#039be5',
        },
    },

    cssFocused: {},
    notchedOutline: {
        borderRadius: '10px',
    },
});

class UITextField extends React.Component {

  render() {          
    const { classes, title, errorTxt, comp_height, language, onChange, value, type, rows, multiline } = this.props;      
    return (      
        <div className={cx('UITextField')} style = {{ height: comp_height === undefined ? '133px' : comp_height}}>
            <div className={cx('UITextField__TitleWrp') }>
                <Typography className={cx('UITextField__Title')} >{title}</Typography> 
                { errorTxt !== undefined &&  <Typography className={cx('UITextField__Error')} >{errorTxt}</Typography> }  
            </div>

            <TextField                                               
                margin="normal"
                variant="outlined"
                fullWidth        
                className={cx('UITextField__Typo')}
                onChange={onChange}
                value={value}       
                type={ type === undefined ?'string':type }
                multiline
                rows={rows}   
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

export default withStyles(TextFieldstyles)(UITextField);