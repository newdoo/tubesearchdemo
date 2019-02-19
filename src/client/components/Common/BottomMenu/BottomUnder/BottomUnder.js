import React from 'react';

import classNames from 'classnames/bind';
import styles from './BottomUnder.scss';
const cx = classNames.bind(styles);

//link
import { Link } from '@common/routes';

import config from '@common/config.json';
const userURL = config[process.env.NODE_ENV].userURL;
const facebookURL = config[process.env.NODE_ENV].facebookURL;
const instargramURL = config[process.env.NODE_ENV].instargramURL;
const twitterURL = config[process.env.NODE_ENV].twitterURL;
const youtubeURL = config[process.env.NODE_ENV].youtubeURL;

class BottomUnder extends React.Component {
    render() {
        return (
            <div className = { cx('BottomMenu')}>                    
                <div className = { cx('BottomMenu__StipopInc')} > stipop Inc. </div> 
                
                <a href={userURL} target="_blank"> 
                    <div className = { cx('BottomMenu__About_Us', 'BottomMenu__Hover')} > About us </div> 
                </a>

                <a href={userURL + '/faq'} target='_blank'> 
                    <div className = { cx('BottomMenu__Faq', 'BottomMenu__Hover')} > FAQ </div> 
                </a>
 
                <a href={userURL + '/contactus'} target='_blank'> 
                    <div className = { cx('BottomMenu__Contact__Us', 'BottomMenu__Hover')} > Contact us </div> 
                </a>
  
                <div className='BottomMenu__SnsWrapper'>
                    <a href={facebookURL} target='_blank'>
                        <img src='/static/images/Main/facebook.svg' className = {cx('StipopBottom__Sns')} />
                    </a>
                    <a href={instargramURL} target='_blank'>
                        <img src='/static/images/Main/instagram.svg'  className = {cx('StipopBottom__Sns')} />
                    </a>
                    <a href={twitterURL} target='_blank'>
                        <img src='/static/images/Main/twitter.svg' className = {cx('StipopBottom__Sns')} />
                    </a>
                    <a href={youtubeURL} target='_blank'>
                        <img src='/static/images/Main/youtube.svg' className = {cx('StipopBottom__Sns')} />
                    </a>
                </div>
                
                <div className = { cx('BottomMenu__Rights')} > All rights reserved 2019 © </div> 

                <div className = { cx('BottomMenu__Condition__Div')} >              
                    
                    <a href={userURL + '/TOU'} target='_blank'> 
                        <div className={cx('BottomMenu__Condition__Typo', 'BottomMenu__Hover')} > Terms </div> 
                    </a> 

                    <div className = { cx('BottomMenu__Condition__Typo')} > <span>&nbsp;&&nbsp;</span> </div>                     
                    
                    <a href={userURL + '/policies'} target='_blank'> 
                        <div className={cx('BottomMenu__Condition__Typo', 'BottomMenu__Hover')} > conditions </div>                 
                    </a>

                </div>
            </div>
        );
    }
}

export default BottomUnder;