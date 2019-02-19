import React from 'react';

import classNames from 'classnames/bind';
import styles from './Still_Sticker.scss';
const cx = classNames.bind(styles);

import { UnderScreen , OverScreen } from '@components/Common/Responsive_utilities';

import Sentense from '@components/UI/How_To_Create/Sentense';

class Still_Sticker extends React.Component {
    render() {
        return (
            <div align="center"  className = { cx('Still_Sticker')}>                        

                <OverScreen>
                    <Sentense 
                        title='HowToCreate__StillSticker__1__Title'
                        desc='HowToCreate__StillSticker__1__Desc'
                    />  
                </OverScreen>
                <UnderScreen>
                    <Sentense 
                        title='HowToCreate__StillSticker__1__Title'
                        desc='HowToCreate__StillSticker__1__Desc__Mobile'
                    />  
                </UnderScreen>
                 
                <Sentense 
                    title='HowToCreate__StillSticker__2__Title'
                    desc='HowToCreate__StillSticker__2__Desc'
                />  
                <Sentense 
                    title='HowToCreate__StillSticker__3__Title'
                    desc='HowToCreate__StillSticker__3__Desc'
                />  
                <Sentense 
                    title='HowToCreate__StillSticker__4__Title'
                    desc='HowToCreate__StillSticker__4__Desc'
                />  
                <Sentense 
                    title='HowToCreate__StillSticker__5__Title'
                    desc='HowToCreate__StillSticker__5__Desc'
                />  
                <Sentense 
                    title='HowToCreate__StillSticker__6__Title'
                    desc='HowToCreate__StillSticker__6__Desc'
                />   

                <div className = { cx('Still_Sticker_br') } />           
            </div>
        );
    }
}

export default Still_Sticker;