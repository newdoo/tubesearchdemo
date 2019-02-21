import React from 'react';

import classNames from 'classnames/bind';
import styles from './YouTubeUserTopInfoWrap.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField, Popover, Paper } from '@material-ui/core/';

import { connect } from 'react-redux';

import network from '@lib/network';
import { signGoogle } from '@lib/firebase';

class YouTubeUserTopInfoWrap extends React.Component {

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

    handleLogin = async() => {
        console.log('handleLogin');
        await signGoogle();
    }
    
    
    handleSubscribers = async() => {
        console.log('handleSubscribers');

        const { channel } = this.props;
        const recv = await network('youtube','SubscribersOn', {id: channel.id});
        console.log(recv);
    }

    render() {
        const { channel } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="YouTubeUserTopInfoWrap">
                <img className="YouTubeUserTopInfoAvatar" src={channel.snippet.thumbnails.default.url} alt={channel.snippet.title} title={channel.snippet.title} />
                <div className="YouTubeUserTopInfoBlockTop">
                    <div>
                        <h1 className="YouTubeUserTopInfoBlockTop__Title">{channel.snippet.title}</h1>
                    </div>
                    <div style={{clear: 'both'}}></div>
                    <div className="YouTubeUserTopInfoBlock">
                        <div className="YouTubeUserTopInfo">
                            <div className="YouTubeUserTopLight">Uploads</div>
                            <span>{channel.statistics.videoCount}</span>
                        </div>
                        <div className="YouTubeUserTopInfo">
                            <div className="YouTubeUserTopLight">Subscribers</div>
                            <span>{channel.statistics.subscriberCount}</span>
                        </div>
                        <div className="YouTubeUserTopInfo">
                            <div className="YouTubeUserTopLight">VIDEO VIEWS</div>
                            <span>{channel.statistics.viewCount}</span>
                        </div>
                        <div className="YouTubeUserTopInfo">
                            <div className="YouTubeUserTopLight">COUNTRY</div>
                            <span>{channel.snippet.country}</span>
                        </div>
                        <div className="YouTubeUserTopInfo">
                            <div className="YouTubeUserTopLight">CHANNEL TYPE</div>
                            <span>?</span>
                        </div>
                        <div className="YouTubeUserTopInfo">
                            <div className="YouTubeUserTopLight">USER CREATED</div>
                            <span>{channel.snippet.publishedAt}</span>
                        </div>
                        <Button className={cx('YouTubeUserTopInfoSubscribers')} onClick={this.handleClick}>
                            구독
                        </Button>
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
                                <div className="YouTubeUserTopInfoSubscribers__Popup__LoginWrp">
                                    <Button className={cx('YouTubeUserTopInfoSubscribers__Popup__LoginButton')} onClick={this.handleLogin}>
                                        로그인
                                    </Button>
                                </div>
                            </Paper>
                            
                        </Popover>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        channel: state.youtube.get('user').get('channel'),        
    }),
)(YouTubeUserTopInfoWrap);