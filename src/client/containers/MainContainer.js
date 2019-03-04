import React from 'react';

//mateirl-ui
import { AppBar, Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField } from '@material-ui/core/';

import TopHeader from '@components/Common/TopHeader';
import SearchByChannelID from '@components/UI/SearchByChannelID';
import SearchByChannelName from '@components/UI/SearchByChannelName';
import Subscriptions from '@components/UI/Subscriptions';
import UdemyCreator from '@components/UI/UdemyCreator';
import UdemyUser from '@components/UI/UdemyUser';

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
                <TopHeader />   
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Home" />
                        <Tab label="SearchByChannelID" />
                        <Tab label="SearchByChannelName" />
                        <Tab label="Subscriptions" />
                        <Tab label="UdemyCreator" />
                        <Tab label="UdemyUser" />
                    </Tabs>
                </AppBar>   
                {value === 0 &&  <div>Home</div>}   
                {value === 1 &&  <SearchByChannelID />}   
                {value === 2 &&  <SearchByChannelName />}
                {value === 3 &&  <Subscriptions />}
                {value === 4 &&  <UdemyCreator />}
                {value === 5 &&  <UdemyUser />}
            </div>
        );
    }
}

export default MainContainer;


