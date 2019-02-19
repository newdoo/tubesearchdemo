import React from 'react';

import classNames from 'classnames/bind';
import styles from './Pricing.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

import PricingMenu from '@components/UI/Pricing/PricingMenu';

import Sticker from '@components/UI/Pricing/Sticker';

class Pricing extends React.Component {
    
    render() {

        const { upload_menu } = this.props;
        return (
            <div>
                <PricingMenu />
                <Sticker />
            </div>
        );
    }
}


export default connect(
    (state) => ({
        upload_menu:state.ui.get('ui').get('upload_menu'),    
    }),
    (dispatch) => ({
        UiActions: bindActionCreators(uiActions, dispatch),    
    })
)(Pricing);
