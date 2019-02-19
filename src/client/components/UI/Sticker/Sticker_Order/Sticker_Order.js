import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Order.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);
import Line_Evently from '@components/Common/Line_Evently';



class Sticker_Order extends React.Component {

  render() {        
    return (        
      <div className = { cx('Sticker_Order')}>
          <div className = { cx('Sticker_Order_div')}>
              <Line_Evently comp_height = { 68 } >
                <div>
                    <Typography className = { cx('Sticker_Order_div_title') } >  Order by  </Typography>                               
                    
                    <Button
                        className = { cx('Sticker_Order_select')}                         
                    >
                        Data recent
                    </Button>

                    <Button
                        className = { cx('Sticker_Order_select')}                         
                    >
                        Data old
                    </Button>

                    <Button
                        className = { cx('Sticker_Order_select')}                         
                    >
                        Name
                    </Button>

                    
                </div>

                <div>
                    <div className = { cx('Sticker_Menu_title_archived')}>
                      Archive
                    </div>
                </div>
              </Line_Evently>
             

          </div>      

      </div>      
    );
  }
}

export default Sticker_Order;
