import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_Bottom_Buttons.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

class Upload_Bottom_Buttons extends React.Component {


  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    return (        
      <div className = { cx('Upload_Bottom_Buttons')}>
         
         <Button className = { cx('Upload_Bottom_Button_Pink' , 'Upload_Bottom_Button_Block')} > 
           Save & Continue next
        </Button>

        <Button className = { cx('Upload_Bottom_Button_Pink')} > 
        Submit
        </Button>

      </div>      
    );
  }
}


export default connect(
    (state) => ({
        sticker_menu:state.ui.get('ui').get('sticker_menu'),    
    })
)(Upload_Bottom_Buttons);

