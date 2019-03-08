import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyProjectVideo.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField, Switch  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';

import network from '@lib/network';

import VerifyIcon from '@material-ui/icons/VerifiedUser';
import VerifyNotIcon from '@material-ui/icons/Error';

import Video from '@components/Common/Video';

const TextFieldstyles = theme => ({
    cssOutlinedInput: {
        height: '55px',
        '&$cssFocused $notchedOutline': {
            borderColor: '#039be5',
        },
    },

    cssOutlinedInput_Multi: {        
        '&$cssFocused $notchedOutline': {
            borderColor: '#039be5',
        },
    },

    cssFocused: {},
    notchedOutline: {
        borderRadius: '10px',
    },
    cssInput: {
        textAlign: 'right',
        marginRight: '16px',
    }
});

class UdemyProjectVideo extends React.Component {

    state = {
        id: '',
        verify: false,
    }

    handleChange = name => event => {  
        console.log(name);
        console.log(event.target.value);  
        this.setState({ [name]: event.target.value });  
    }

    videoVerify = async() => {
        console.log('videoVerify');
        const { user } = this.props;
        const recv = await network('udemy','videoVerify',{uid: user.uid, videoID: this.state.id});
        console.log(recv);
    }

    showVideo = () => {
        console.log('showVideo');
    }

    render() {
        const { classes } = this.props;
        const { id, verify } = this.state;
        return (
            <div className={cx('UdemyProjectVideo')}>
                <div className={cx('column')}>
                    {
                        verify ?
                        <VerifyIcon className={cx('verifyIcon')} />
                        :
                        <VerifyNotIcon className={cx('verifyNotIcon')} />
                    }
                    <TextField                                               
                        margin="normal"
                        variant="outlined"
                        fullWidth        
                        className={cx('videoID')}
                        onChange={this.handleChange('id')}
                        value={id}       
                        type='string'
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                    <Button 
                        onClick={this.showVideo} 
                        variant="outlined" 
                        className={cx('verify')}>
                        인증
                    </Button>
                </div>
                { /* <Video url="https://youtu.be/xh2iEIJUVfk?autoplay=1" allowFullScreen /> */ }
                { /* <Video url="https://www.youtube.com/watch?v=xh2iEIJUVfk&autoplay=1" allowFullScreen /> */ }
                { /* <Video url="https://www.youtube.com/embed/xh2iEIJUVfk?autoplay=1" allowFullScreen /> */ }
                { /* https://player.vimeo.com/video/76979871?autoplay=1 */ }
                <Video url={id} allowFullScreen />
            </div>
        )
    }
}

export default withStyles(TextFieldstyles)(connect(
    (state) => ({
        user: state.youtube.get('user').get('user'),        
    }),
)(UdemyProjectVideo));