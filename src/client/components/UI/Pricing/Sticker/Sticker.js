import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sticker.scss';

import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';

const cx = classNames.bind(styles);

import { createMuiTheme } from '@material-ui/core/';    
const pinkTheme = createMuiTheme({ palette: { primary: { main:'#ff3b94'} } ,  typography: { useNextVariants: true } })     // 버튼 흰색 처리

import Sentense from '@components/UI/Pricing/Sentense';

class Sticker extends React.Component {
    render() {
        return (
            <div align="center"  className = { cx('Product_App')}>                        

                <Sentense 
                    title ='Pricing__StickerPricingPolicy__1__Title'
                    desc='Pricing__StickerPricingPolicy__1__Desc'
                />
                <Sentense 
                    title ='Pricing__StickerPricingPolicy__2__Title'
                    desc='Pricing__StickerPricingPolicy__2__Desc'
                />
                <Sentense 
                    title ='Pricing__StickerPricingPolicy__3__Title'
                    desc='Pricing__StickerPricingPolicy__3__Desc'
                />

                <div className = { cx('Product_App_button_bottom') } />
                    
            </div>
        );
    }
}

export default Sticker;