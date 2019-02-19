import React from 'react';

import classNames from 'classnames/bind';
import styles from './Account_TextField.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField , Checkbox  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import InputAdornment from '@material-ui/core/InputAdornment';

const TextFieldstyles = theme => ({
  cssOutlinedInput: {
      height:'50px',
      marginTop:'-7px',
      '&$cssFocused $notchedOutline': {
        borderColor:  '#c9c9c9',
      },
  },

  cssOutlinedInput_Multi: {        
      '&$cssFocused $notchedOutline': {
        borderColor:  '#c9c9c9',
      },
  },

  cssFocused: {},
  notchedOutline: {
      borderRadius: '10px',
  },
});

class Account_TextField extends React.Component {
  
  state = {
    check: false,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {          
    const { classes, title, desc, comp_height, language , placeholder , noti , disable , defaultValue = '' , onChange } = this.props;      

    return (      
        <div className = { cx('Account_TextField')} >
            
            <div className = { cx('Account_TextField_div')}>
                <div className = { cx('Account_TextField_left_div')}>
                   <Typography className = { cx('Account_TextField_title') } > { title } </Typography>                
                </div>

                <div className = { cx('Account_TextField_right')}>
                    <TextField                                                       
                        margin="normal"
                        variant="outlined"
                        defaultValue = {defaultValue }
                        placeholder = { placeholder } 
                        fullWidth        
                        onChange={onChange}                        
                        disabled = { disable }
                        className={cx('Account_TextField_Typo') }                        
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                            endAdornment: (
                            <InputAdornment position="end">
                               {
                                   noti !== undefined && 
                                   <Checkbox        
                                            checked={this.state.check }
                                            onChange={this.handleChange('check')}  
                                            value= 'check'
                                            icon={ <img src='/static/images/Login/blank.svg' /> }
                                            checkedIcon={ <img src='/static/images/Login/confirm.svg'  /> }
                                    />
                               }

                            </InputAdornment>
                            ),
                                            
                        }}

                       
                    />

                    

                   <Typography className = { cx('Account_TextField_desc') } > { desc } </Typography>                                    
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
)(Account_TextField));

