import React from 'react';

import classNames from 'classnames/bind';
import styles from './Upload_Image_Info.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';


import Upload_File_Info from '@components/UI/Upload_Popup/Upload_File_Info';
import Upload_Bottom_Buttons from '@components/UI/Upload_Popup/Upload_Bottom_Buttons';

import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid';

class Upload_Image_Info extends React.Component {

  get_Info_desc_1 = () => {
    const { upload_menu } = this.props;

    if(upload_menu === 0)
      return 'Colored sticker: png, 408 * 408px';
    else
      return 'Animated sticker: GIF, 408 x 408 px';
  }

  get_Info_desc_2 = () => {
    const { upload_menu } = this.props;
    if(upload_menu === 0)
      return 'Outlined sticker: svg, file with black lines (optional to upload) ';
    else
      return 'Thumbnail: PNG, 408 x 408 px';
  }

  get_file_desc_1 = () => {
    const { upload_menu } = this.props;
    if(upload_menu === 0)
      return 'Coloured';
    else
      return 'Animated';
  }

  get_file_desc_2 = () => {
    const { upload_menu } = this.props;
    if(upload_menu === 0)
      return 'Outlined';
    else
      return 'Thumb';
  }


  render() {      
    const { sticker_menu , upload_menu , hand_upload_menu_change  } = this.props;  
    

    return (        
      <div className = { cx('Upload_Image_Info')}>
          <div className = { cx('Upload_Image_Info_File_Info_div')} >              
            <div className = { cx('Upload_Image_Info_File_Info_Top_div')} >              
              <div className = { cx('Upload_Image_Info_File_Info_Left_div')} >                  
                  <Typography className = { cx('Upload_Image_Info_File_Info_title') } >  File </Typography>       
                  <Button
                    className={cx('Upload_Image_Info_Button_Guide')}      
                    onClick={this.handle_button_Click}
                    size ="small"
                  >   
                  view guide
                  </Button>
                  <Typography className = { cx('Upload_Image_Info_Desc') } >  { this.get_Info_desc_1() } </Typography>       
                  <Typography className = { cx('Upload_Image_Info_Desc') } >  { this.get_Info_desc_2() } </Typography>       
              </div>

              <div className = { cx('Upload_Image_Info_File_Info_Right_div')} >
                <div className = { cx('Upload_Image_Info_File_Info_Right_Drag')}>
                  <div className = { cx('Upload_Image_Info_File_Info_Right_Drag_Dot')}>
                    <div className = { cx('Upload_Image_Info_File_Info_Right_Drag_Text')}>
                      <Typography className = { cx('Upload_Image_Info_File_Info_Right_Drag_Main') } >  Main </Typography>   
                      (Drag here
                      to apply)              
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>  

          <div className = { cx('Upload_Image_Info_File_Drag_div')} >
            <div className = { cx('Upload_Image_Info_File_Drag_Div_Squre')} >
            <Grid container spacing={0}>   
              <Grid>
                  <div className = { cx('Upload_Image_Info_File_Drag_Squre')} >                
                    <MenuIcon className = { cx('Upload_Image_Info_MenuIcon')}  />
                      <div className = { cx('Upload_Image_Info_File_Rect')} >
                          <div className = { cx('Upload_Image_Info_File_Inner_Dot')} >
                              { this.get_file_desc_1() }
                          </div>

                          <div className = { cx('Upload_Image_Info_File_Inner_Dot')} >
                          { this.get_file_desc_2() }
                          </div>
                      </div>
                  </div>
              </Grid>

              <Grid>
              <div className = { cx('Upload_Image_Info_File_Drag_Squre')} >
                 <MenuIcon className = { cx('Upload_Image_Info_MenuIcon')}  />
                  <div className = { cx('Upload_Image_Info_File_Rect')} >
                      <div className = { cx('Upload_Image_Info_File_Inner_Dot')} >
                      { this.get_file_desc_1() }
                      </div>

                      <div className = { cx('Upload_Image_Info_File_Inner_Dot')} >
                      { this.get_file_desc_2() }
                      </div>
                  </div>
              </div>
              </Grid>
            </Grid>
            </div>

            
          </div>
          <Typography className = { cx('Upload_Image_Info_File_Info_Right_Drag_Bottom') } >  2 / 9, 12, 15, 18, 21, 24, 27, 30 </Typography>   
          <Upload_Bottom_Buttons />
      </div>      
    );
  }
}


export default connect(
    (state) => ({
        sticker_menu:state.ui.get('ui').get('sticker_menu'),    
    })
)(Upload_Image_Info);

