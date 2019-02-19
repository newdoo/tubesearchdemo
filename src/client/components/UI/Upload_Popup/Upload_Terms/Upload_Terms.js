import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_Terms.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select ,Checkbox   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

class Upload_Terms extends React.Component {

  state = {
    selectedValue: 'id',
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };


  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    return (        
      <div className = { cx('Upload_Terms')}>
          <div className = { cx('Upload_Terms_div')}>
            <div className = { cx('Upload_Terms_left_div')}>
              <Typography className = { cx('Upload_Terms_title') } > Terms & Conditions </Typography>   
            </div>
            <div className = { cx('Upload_Price_right')}>
              <Checkbox        
                checked={this.state.selectedValue === 'id' }
                onChange={this.handleChange }                 
                value= 'id'
                icon={ <img src='/static/images/Login/blank.svg' /> }
                checkedIcon={ <img src='/static/images/Login/confirm.svg'  /> }
                />

                <div className = { cx('Upload_Price_title') } > I agree to terms of service     </div>
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
)(Upload_Terms);

