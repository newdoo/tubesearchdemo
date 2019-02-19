import React from 'react';

import classNames from 'classnames/bind';
import styles from './Account_Cooperate.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';


import Account_TextField from '@components/UI/Account_Popup/Account_TextField';

import Switch from '@material-ui/core/Switch';


const switch_styles = theme => ({    
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#ff3b94',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: '#dddbdc',
    backgroundColor: '#dddbdc',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
});

class Account_Cooperate extends React.Component {
  
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {          
    const { classes, title, desc, comp_height, language } = this.props;      

    return (      
        <div className = { cx('Account_Cooperate')} >           

            <div className = { cx('Account_Cooperate_div')}>
                <div className = { cx('Account_Cooperate_left_div')}>
                   <Typography className = { cx('Account_Cooperate_title') } > Cooperate </Typography>                
                </div>
                <div className = { cx('Account_Cooperate_right_div')}>
                    <Switch
                      classes={{
                        switchBase: classes.iOSSwitchBase,
                        bar: classes.iOSBar,
                        icon: classes.iOSIcon,
                        iconChecked: classes.iOSIconChecked,
                        checked: classes.iOSChecked,
                      }}
                      disableRipple
                      checked={this.state.checkedB}
                      onChange={this.handleChange('checkedB')}
                      value="checkedB"
                    />

                    <Typography className = { cx('Account_Cooperate_title' , 'Account_Cooperate_sub_title') } > Photo ID </Typography>     

                    <Typography className = { cx('Account_Cooperate_desc') } > Government issued passport, driving lisence
    image file under 2MB </Typography>     


                <Button
                      className = { cx('Account_Cooperate_select')} 
                      onClick={this.handle_button_Click}
                >
                  <img src='/static/images/Common/file.svg' />
                  </Button>
                </div>
            </div>

        </div>
    );
  }
}

export default withStyles(switch_styles)(connect(
    (state) => ({
      language: state.ui.get('ui').get('language'),
    })
  )(Account_Cooperate));
  

  