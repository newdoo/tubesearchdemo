import React from 'react';

import classNames from 'classnames/bind';
import styles from './Animatede_Sticker.scss';
const cx = classNames.bind(styles);

import { UnderScreen , OverScreen } from '@components/Common/Responsive_utilities';

import Sentense from '@components/UI/How_To_Create/Sentense';

class Animatede_Sticker extends React.Component {
    render() {
        return (
            <div align="center"  className = { cx('Animatede_Sticker')}>                        

                <OverScreen>
                    <Sentense 
                        title='HowToCreate__AnimatedSticker__1__Title'
                        desc='HowToCreate__AnimatedSticker__1__Desc'
                    />  
                </OverScreen>
                <UnderScreen>
                    <Sentense 
                        title='HowToCreate__AnimatedSticker__1__Title'
                        desc='HowToCreate__AnimatedSticker__1__Desc__Mobile'
                    />  
                </UnderScreen>

                <Sentense 
                    title='HowToCreate__AnimatedSticker__2__Title'
                    desc='HowToCreate__AnimatedSticker__2__Desc'
                />   
                <Sentense 
                    title='HowToCreate__AnimatedSticker__3__Title'
                    desc='HowToCreate__AnimatedSticker__3__Desc'
                />   
                <Sentense 
                    title='HowToCreate__AnimatedSticker__4__Title'
                    desc='HowToCreate__AnimatedSticker__4__Desc'
                />   
                <Sentense 
                    title='HowToCreate__AnimatedSticker__5__Title'
                    desc='HowToCreate__AnimatedSticker__5__Desc'
                />   
                <Sentense 
                    title='HowToCreate__AnimatedSticker__6__Title'
                    desc='HowToCreate__AnimatedSticker__6__Desc'
                />   
                                                                        
                <div className = { cx('Animatede_Sticker_br') } />
                    
            </div>
        );
    }
}

export default Animatede_Sticker;