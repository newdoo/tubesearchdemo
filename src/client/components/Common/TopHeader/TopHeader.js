import React from 'react';

import classNames from 'classnames/bind';
import styles from './TopHeader.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuList, MenuItem, Select, TextField, Popover, Paper } from '@material-ui/core/';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import { withStyles } from "@material-ui/core/styles";
const menuStyles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.white,
        },
      },
    },
    primary: {},
    icon: {},
});

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as youtubeActions from '@store/modules/youtube';

import { auth, signGoogle } from '@lib/firebase';

import { Router } from '@common/routes';

class TopHeader extends React.Component {

    state = {
        anchorEl: null,
    }

    handleClick = event => {
        this.setState({
          anchorEl: event.currentTarget,
        });
    };
    
    handleClose = () => {
        this.setState({
          anchorEl: null,
        });
    };

    login = async() => {
        console.log('login');
        await signGoogle();
    }

    logout = () => {
        console.log('logout');

        auth().signOut().then(function() {
            // Sign-out successful.
            console.log('로그아웃 성공');
            window.location.reload();
        }).catch(function(error) {
            // An error happened.
            console.log('로그아웃 에러');
        });
    }

    render() {
        const { user, classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="TopHeader">
                {
                user === null ?
                    <Button className={cx('TopHeader__Login')} onClick={this.login}>
                        로그인
                    </Button>
                    :
                    <div className={cx('TopHeader__Photo')} onClick={this.handleClick}>
                        <img alt="" src={user.photoURL} />
                    </div>
                }
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Paper className="YouTubeUserTopInfoSubscribers__Popup">
                        <div className="YouTubeUserTopInfoSubscribers__Popup__Title">채널을 구독하시겠습니까?</div>
                        <div className="YouTubeUserTopInfoSubscribers__Popup__Content">채널을 구독하려면 로그인하세요.</div>
                        <MenuList>
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Sent mail" />
                            </MenuItem>
                            <MenuItem className={classes.menuItem}>
                                <ListItemIcon className={classes.icon}>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Drafts" />
                            </MenuItem>
                            <MenuItem className={classes.menuItem} onClick={this.logout}>
                                <ListItemIcon className={classes.icon}>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="로그아웃" />
                            </MenuItem>
                        </MenuList>
                    </Paper>
                    
                </Popover>
            </div>
        )
    }
}

export default withStyles(menuStyles)(connect(
    (state) => ({
      user: state.youtube.get('user').get('user'),      
    }),
    (dispatch) => ({
      YoutubeActions: bindActionCreators(youtubeActions, dispatch),    
    })
  )(TopHeader));