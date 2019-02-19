import React from 'react';

import classNames from 'classnames/bind';
import styles from './Account_Right.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import Account_Right_Textfield from '@components/UI/Account_Popup/Account_Right_TextField';

import Grid from '@material-ui/core/Grid';


class Account_Right extends React.Component {

  render() {              
    const { handleChange , handle_send } = this.props;      
    const { onFileChange , image } = this.props;      

    return (      
        <div className = { cx('Account_Right')} >
            <div className = { cx('Account_Right_div')} >
                <div className = { cx('Account_Right_image_div')} >
                    <div className = { cx('Account_Right_image_icon')}>
                        <img src='/static/images/LoginedHome/garbage.svg' />
                    </div>

                    { image === '' && <img src='/static/images/Common/default_user.png'  className = { cx('Account_Right_image_user')} /> }
                    { image !== '' && <img src={ image }  className = { cx('Account_Right_image_user')} /> }
              
                    <div className = { cx('Account_Right_image_icon')}>
                        <label htmlFor='write' >
                            <img src='/static/images/LoginedHome/write.svg' />                            
                        </label>                                  
                        <input type="file" id="write" onChange={onFileChange} className = { cx('Account_Right_input')}   />
                    </div>                

           
                </div>   

                <Account_Right_Textfield onChange={ handleChange('your_profile') }   placeholder='your profile' comp_height = { 100 }  />        
                <Account_Right_Textfield onChange={ handleChange('web_address') }   icon='web' placeholder='your website address' />        

                <Grid container spacing={0}>   
                    <Grid item xs={6}>
                        <Account_Right_Textfield onChange={ handleChange('facebook_id') }   icon='facebook' placeholder='facebook ID' rightMargin = {20} />        
                    </Grid>
                    <Grid item xs={6}>
                        <Account_Right_Textfield onChange={ handleChange('instagram_id') }   icon='instagram' placeholder='instagram ID' rightMargin = {0} />        
                    </Grid>
                    <Grid item xs={6}>
                        <Account_Right_Textfield onChange={ handleChange('behance_id') }   icon='behance' placeholder='behance ID' rightMargin = {20} />        
                    </Grid>
                    <Grid item xs={6}>
                        <Account_Right_Textfield onChange={ handleChange('dribble_id') }   icon='dribbble' placeholder='dribble ID' rightMargin = {0} />        
                    </Grid>
                </Grid>


                <Button
                        className = { cx('Account_Right_Save')}               
                        onClick = { handle_send }
                >
                Save
                </Button>    

            </div>           
        </div>
    );
  }
}

export default connect(
    (state) => ({
        language: state.ui.get('ui').get('language'),    
    }),
)(Account_Right);

