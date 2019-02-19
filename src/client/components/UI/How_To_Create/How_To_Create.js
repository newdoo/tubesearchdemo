import React from 'react';

import classNames from 'classnames/bind';
import styles from './How_To_Create.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';


const cx = classNames.bind(styles);

import How_To_Create_Menu from '@components/UI/How_To_Create/How_To_Create_Menu';

import Still_Sticker from '@components/UI/How_To_Create/Still_Sticker';
import Animated_Sticker from '@components/UI/How_To_Create/Animatede_Sticker';
import What_To_Mind from '@components/UI/How_To_Create/What_To_Mind';

class How_To_Create extends React.Component {
    
    render() {

        const { upload_menu } = this.props;
        return (
            <div>
                <How_To_Create_Menu />
                 {
                    upload_menu === 0 && <Still_Sticker />
                 }

                 {
                    upload_menu === 1 && <Animated_Sticker />
                 }

                 {
                    upload_menu === 2 && <What_To_Mind />
                 }

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
)(How_To_Create);
