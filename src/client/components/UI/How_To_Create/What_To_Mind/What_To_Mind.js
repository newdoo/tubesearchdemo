import React from 'react';

import classNames from 'classnames/bind';
import styles from './What_To_Mind.scss';

import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Sentense from '@components/UI/How_To_Create/Sentense';

class What_To_Mind extends React.Component {
    render() {
        return (
            <div align="center"  className = { cx('What_To_Mind')}>                        

                <Sentense 
                    title='HowToCreate__WhatToMind__1__Title'
                    desc='HowToCreate__WhatToMind__1__Desc'
                />   
                <Sentense 
                    title='HowToCreate__WhatToMind__2__Title'
                    desc='HowToCreate__WhatToMind__2__Desc'
                />   
                <Sentense 
                    title='HowToCreate__WhatToMind__3__Title'
                    desc='HowToCreate__WhatToMind__3__Desc'
                />   
                <Sentense 
                    title='HowToCreate__WhatToMind__4__Title'
                    desc='HowToCreate__WhatToMind__4__Desc'
                />   
                <Sentense 
                    title='HowToCreate__WhatToMind__5__Title'
                    desc='HowToCreate__WhatToMind__5__Desc'
                />   
                <Sentense 
                    title='HowToCreate__WhatToMind__6__Title'
                    desc='HowToCreate__WhatToMind__6__Desc'
                />   
                <Sentense 
                    title='HowToCreate__WhatToMind__7__Title'
                    desc='HowToCreate__WhatToMind__7__Desc'
                />   
                <Sentense 
                    pink_desc='HowToCreate__WhatToMind__Warn__Desc'
                />   

                <div className = { cx('What_To_Mind_br') } />
                    
            </div>
        );
    }
}

export default What_To_Mind;