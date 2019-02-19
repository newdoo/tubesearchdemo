import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_Category.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

class Upload_Category extends React.Component {

  draw_buttons = ( buttonStr ) => {
    return (
      <Button
        className={cx('Upload_Category_button')}      
        onClick={this.handle_button_Click}
        size ="small"
      >   
      { buttonStr }
      </Button>

    );
  }

  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    return (        
      <div className = { cx('Upload_Category')}>
        <div className = { cx('Upload_Category_div')}>
            <div className = { cx('Upload_Category_left_div')}>
              <Typography className = { cx('Upload_Category_title') } > Category </Typography>                
            </div>
            <div className = { cx('Upload_Category_right_div')}>
              <div className = { cx('Upload_Category_button_div') } >
                { this.draw_buttons('Cartoon')}
                { this.draw_buttons('Celebrity')}
                { this.draw_buttons('Animal')}
                { this.draw_buttons('Sports')}
                { this.draw_buttons('Gag')}
                { this.draw_buttons('Romance')}
                { this.draw_buttons('People')}
                { this.draw_buttons('Food/Drink')}
                { this.draw_buttons('Phrases')}
                { this.draw_buttons('Halloween')}
                { this.draw_buttons('etc.')}
              </div>
              <Typography className = { cx('Upload_Category_desc') } > Select one or two categories for your sticker package. </Typography>                
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
)(Upload_Category);

