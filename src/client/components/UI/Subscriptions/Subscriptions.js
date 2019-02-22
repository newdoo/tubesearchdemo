import React from 'react';

import classNames from 'classnames/bind';
import styles from './Subscriptions.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField, Popover, Paper } from '@material-ui/core/';

import { connect } from 'react-redux';

import network from '@lib/network';

class Subscriptions extends React.Component {

    handleClick = async() => {
        console.log('handleClick');

        const { user } = this.props;
        const recv = await network('youtube', 'subscribersByChannel', {uid: user.uid});
        console.log(recv);
    }
    render() {
        return (
            <div className="Subscriptions">
                <Button className={cx('Subscriptions__Button')} onClick={this.handleClick}>
                    구독리스트
                </Button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        user: state.youtube.get('user').get('user'),        
    }),
)(Subscriptions);