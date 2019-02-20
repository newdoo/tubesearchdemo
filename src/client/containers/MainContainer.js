import React from 'react';

//mateirl-ui
import { AppBar, Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField } from '@material-ui/core/';

import SearchByChannelID from '@components/UI/SearchByChannelID';
import SearchByChannelName from '@components/UI/SearchByChannelName';

class MainContainer extends React.Component {

    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;   
        return (
            <div>     
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="SearchByChannelID" />
                        <Tab label="SearchByChannelName" />
                    </Tabs>
                </AppBar>   
                {value === 0 &&  <SearchByChannelID />}   
                {value === 1 &&  <SearchByChannelName />}   
            </div>
        );
    }
}

export default MainContainer;


