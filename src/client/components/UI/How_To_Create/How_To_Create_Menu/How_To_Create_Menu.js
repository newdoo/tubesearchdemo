import React from 'react';

import classNames from 'classnames/bind';
import styles from './How_To_Create_Menu.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import { Link } from '@common/routes';

class How_To_Create_Menu extends React.Component {
    render() {
        const { upload_menu, language } = this.props;
        return (
            <div align="center"  className = { cx('ProductMenu')}>    
                <div className = { cx('ProductMenu_div')}>
                    <div className = { cx('ProductMenu_menu' , upload_menu === 0 ?'ProductMenu_menu_select':'' )}>      
                        <Link route="howtocreate">                       
                            <a className ={cx('ProductMenu_link')}>{getLanguage("HowToCreate__Menu__1", language)}</a>                    
                        </Link>
                    </div>
                    
                    <div className = { cx('ProductMenu_menu' , upload_menu === 1 ?'ProductMenu_menu_select':'' )}>                        
                        <Link route="howtocreate_animated">
                            <a className ={cx('ProductMenu_link')}>{getLanguage("HowToCreate__Menu__2", language)}</a>
                        </Link>
                    </div>
                
                    <div className = { cx('ProductMenu_menu' , upload_menu === 2 ?'ProductMenu_menu_select':'' )}>                        
                        <Link route="howtocreate_whattomind">
                            <a className ={cx('ProductMenu_link','ProductMenu_link_pink')}>{getLanguage("HowToCreate__Menu__3", language)}</a>
                        </Link>
                    </div>
                    
                </div>
            </div>
        );    
    }
}

export default connect(
    (state) => ({
        upload_menu:state.ui.get('ui').get('upload_menu'),  
        language: state.ui.get('ui').get('language'),
    })
)(How_To_Create_Menu);


