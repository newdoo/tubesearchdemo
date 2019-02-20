import React from 'react';

import classNames from 'classnames/bind';
import styles from './YouTubeUser.scss';
const cx = classNames.bind(styles);

import YouTubeUserTopHeader from './YouTubeUserTopHeader';
import YouTubeUserTopInfoWrap from './YouTubeUserTopInfoWrap';

class YouTubeUser extends React.Component {
    render() {
        return (
            <div className={cx('YouTubeUser')}>
                <YouTubeUserTopHeader />
                <YouTubeUserTopInfoWrap />
            </div>
        )
    }
}

export default YouTubeUser;