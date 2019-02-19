import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_Price.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select ,Checkbox   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

import Grid from '@material-ui/core/Grid';

class Upload_Price extends React.Component {

  state = {
    selectedValue: 'a',
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };


  draw_buttons = ( id ,  buttonStr ) => {
    return (
      <Grid item xs={6}>
        <div className = { cx('Upload_Category_button_party') } >
          <Checkbox        
          checked={this.state.selectedValue === id }
          onChange={this.handleChange }                 
          value= { id }
          icon={ <img src='/static/images/Login/blank.svg' /> }
          checkedIcon={ <img src='/static/images/Login/confirm.svg'  /> }
          />
          <Typography className = { cx('Upload_Category_button_desc') } > { buttonStr } </Typography>     
        </div>
      </Grid>
    );
  }

  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    return (        
      <div className = { cx('Upload_Price')}>
          <div className = { cx('Upload_Price_div')}>
            <div className = { cx('Upload_Price_left_div')}>
              <Typography className = { cx('Upload_Price_title') } > Price </Typography>                
            </div>
            <div className = { cx('Upload_Price_right_div')}>
               <Grid container spacing={0}>                
                { this.draw_buttons('1','Free')}
                { this.draw_buttons('2','10 Pop ($0.99 USD)')}
                { this.draw_buttons('3','20 Pop ($1.99 USD)')}
                { this.draw_buttons('4','30 Pop ($2.99 USD)')}

               </Grid>            
            </div>

        </div>
      </div>      
    );
  }
}


export default connect(
    (state) => ({
        sticker_menu:state.ui.get('ui').get('sticker_menu'),    
    })
)(Upload_Price);

