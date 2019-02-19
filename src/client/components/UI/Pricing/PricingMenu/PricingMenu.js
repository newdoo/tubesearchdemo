import React from 'react';

import classNames from 'classnames/bind';
import styles from './PricingMenu.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';

import { Link } from '@common/routes';

class PricingMenu extends React.Component {
    render() {
        const { upload_menu, language } = this.props;
        return (
            <div align="center" className = { cx('PricingMenu')}>    
                <div className = { cx('PricingMenu_div')}>
                    <div className = { cx('ProductMenu_menu', upload_menu === 0 ?'ProductMenu_menu_select':'' )}>                        
                        <Link route="pricing">                       
                            <a className ={cx('ProductMenu_link')}> {getLanguage("Pricing__Menu__1", language)} </a>                    
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
)(PricingMenu);


