import React from 'react';

import classNames from 'classnames/bind';
import styles from './Account_Country.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';


import Account_TextField from '@components/UI/Account_Popup/Account_TextField';

import Switch from '@material-ui/core/Switch';

import countryList from 'react-select-country-list';

import OutlinedInput from '@material-ui/core/OutlinedInput';


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

class Account_Country extends React.Component {
  
  state = {
    checkedA: true,
    checkedB: true,

    anchorEl: null,  
    country: '',      

    open: false,

    country_code:0,

  };

  handle_button_Click = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  handleChange = event => {
    console.log(event);
    console.log("event.target.name=" + event.target.name );
    console.log("event.target.value=" + event.target.value );
    this.setState({ [event.target.name]: event.target.value });

    const { onChange  } = this.props;      
    onChange(event);

  };

  changeHandler = value => {
    this.setState({ value })
  }

  handle_button_Close = ( event  ) => {  
    this.setState({ anchorEl: null });
    this.setState({ country : event });

    console.log(event);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };


  getCountryName = ( value ) => {
    console.log("getCountryName=" + value );
    const { login_country } = this.props;      
    for (let i = 0; i < login_country.length; i++) {
      if(login_country[i].code === value) {
        console.log("find=" + login_country[i].c_name );
        return login_country[i].c_name;
      }
    }
    return "";
  }

  render() {          
    const { classes, title, desc, comp_height, language , login_country , onChange  } = this.props;      
    
    if(login_country === '') {
      return (
        <div className = { cx('Account_Country')} >           
        </div>
      );
    }

    return (      
        <div className = { cx('Account_Country')} >           

            <div className = { cx('Account_Cooperate_div')}>
                <div className = { cx('Account_Cooperate_left_div')}>
                   <Typography className = { cx('Account_Cooperate_title') } > Country </Typography>                
                </div>
                <div className = { cx('Account_Cooperate_right_div')}>

                <Select
                  className = { cx('Account_Cooperate_right_select')}
                  variant="outlined"
                  open={this.state.open}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}
                  value= { this.state.country_code }
                  onChange={this.handleChange}                                       
                  input={
                    <OutlinedInput                                                                              
                      labelWidth={550}
                      name='country_code'                   
                      id="outlined-age-simple"
                    />
                  }
                >    

                {
                  login_country.map (( data ,i) => (
                    <MenuItem key = { data.code } value = { data.code }> { data.c_name } </MenuItem> 
                  ))
                }

                </Select>
               
                </div>
            </div>

        </div>
    );
  }
}

export default withStyles(TextFieldstyles)(connect(
    (state) => ({
      language: state.ui.get('ui').get('language'),
      login_country:state.login.get('login').get('login_country'),    
    })
  )(Account_Country));
  

  