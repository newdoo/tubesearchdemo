import React from 'react';

import classNames from 'classnames/bind';
import styles from './YouTubeUserTopHeader.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';

class YouTubeUserTopHeader extends React.Component {
    render() {
        const { channel } = this.props;
        return (
            <div className="YouTubeUserTopHeader">
                <div className="YouTubeUserTopHeaderBackground" style={{backgroundImage: `url(${channel.brandingSettings.image.bannerImageUrl})`}}>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        channel: state.youtube.get('user').get('channel'),        
    }),
)(YouTubeUserTopHeader);