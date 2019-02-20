import React from 'react';

import classNames from 'classnames/bind';
import styles from './YouTubeUserTopInfoWrap.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField } from '@material-ui/core/';

import { connect } from 'react-redux';

import network from '@lib/network';

class YouTubeUserTopInfoWrap extends React.Component {
    
    handleSubscribers = async() => {
        console.log('handleSubscribers');

        const { channel } = this.props;
        const recv = await network('youtube','SubscribersOn', {id: channel.id});
        console.log(recv);
    }

    render() {
        const { channel } = this.props;
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
                        <Button className={cx('YouTubeUserTopInfoSubscribers')} onClick={this.handleSubscribers}>
                            구독
                        </Button>
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