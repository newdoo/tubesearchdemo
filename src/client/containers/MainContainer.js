import React from 'react';

import { Router } from '@common/routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

//mateirl-ui
import { AppBar, Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField } from '@material-ui/core/';

import TopHeader from '@components/Common/TopHeader';
import SearchByChannelID from '@components/UI/SearchByChannelID';
import SearchByChannelName from '@components/UI/SearchByChannelName';
import Subscriptions from '@components/UI/Subscriptions';
import UdemyCreator from '@components/UI/UdemyCreator';
import UdemyUser from '@components/UI/UdemyUser';

class MainContainer extends React.Component {

    handleChange = (event, value) => {
        const { UiActions } = this.props;
        UiActions.setMenu({menu: value});
        switch(value) {
            case 0:
            Router.pushRoute('home');
            break;
            case 1:
            Router.pushRoute('search');
            break;
            case 2:
            break;
            case 3:
            Router.pushRoute('subscriptions');
            break;
            case 4:
            Router.pushRoute('udemy_creator');
            break;
            case 5:
            break;

            default:
            break;
        }
        
    }

    render() {
        const { menu } = this.props;
        return (
            <div>
                <TopHeader />   
                <AppBar position="static">
                    <Tabs value={menu} onChange={this.handleChange}>
                        <Tab label="Home" />
                        <Tab label="SearchByChannelID" />
                        <Tab label="SearchByChannelName" />
                        <Tab label="Subscriptions" />
                        <Tab label="UdemyCreator" />
                        <Tab label="UdemyUser" />
                    </Tabs>
                </AppBar>   
                {menu === 0 &&  <div>Home</div>}   
                {menu === 1 &&  <SearchByChannelID />}   
                {menu === 2 &&  <SearchByChannelName />}
                {menu === 3 &&  <Subscriptions />}
                {menu === 4 &&  <UdemyCreator />}
                {menu === 5 &&  <UdemyUser />}
            </div>
        );
    }
}

export default connect(
    (state) => ({
        menu: state.ui.get('ui').get('menu'),   
    }),
    (dispatch) => ({
        UiActions: bindActionCreators(uiActions, dispatch),  
    })
)(MainContainer);
  
