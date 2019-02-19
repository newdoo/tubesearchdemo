import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker_Menu.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';


const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Link } from '@common/routes';

import Line_Evently from '@components/Common/Line_Evently';

class Sticker_Menu extends React.Component {

  render() {      
    const { sticker_menu } = this.props;  
    return (        
      <div className = { cx('Sticker_Menu')}>
          <div className = { cx('Sticker_Menu_div')}>
              <Line_Evently comp_height = { 60 } >
                <div>
                    <Link route="sticker">     
                        <a> 
                        <div className = { cx('Sticker_Menu_title_div' , sticker_menu === 0 ? 'Sticker_Menu_select_menu' : '') }>
                            <img src="/static/images/Sticker/mail_on.svg" className = { cx('Sticker_Menu_icon')} />
                            Draft
                            <div className = { cx('Sticker_Menu_number')} >
                                22
                            </div>
                          </div>
                        </a>                    
                    </Link>

                    <Link route="sticker_published">                       
                        <a> 
                        <div className = { cx('Sticker_Menu_title_div'  , sticker_menu === 1 ? 'Sticker_Menu_select_menu' : '')}>                       
                                <div className = { cx('Sticker_Menu_oval', sticker_menu !== 1 ? 'Sticker_Menu_icon_trans' : '')} />
                                Published
                                <div className = { cx('Sticker_Menu_number')} >
                                    34
                                </div>

                        </div>
                        </a>
                    </Link>

                    <Link route="sticker_wallet">                       
                        <a> 
                        <div className = { cx('Sticker_Menu_title_div' ,' Sticker_Menu_title_wallet'  , sticker_menu === 2 ? 'Sticker_Menu_select_menu' : '')}>
                            <div className = { cx('Sticker_Menu_oval', sticker_menu !== 2 ? 'Sticker_Menu_icon_trans' : '')} />
                                Wallet                        
                        </div>
                        </a>
                    </Link>
                </div>

                <div>
                    <div className = { cx('Sticker_Menu_title_archived')}>
                      Archived
                    </div>
                </div>
              </Line_Evently>
             

          </div>      

      </div>      
    );
  }
}


export default connect(
    (state) => ({
        sticker_menu:state.ui.get('ui').get('sticker_menu'),    
    })
)(Sticker_Menu);

