import React from 'react';

import classNames from 'classnames/bind';
import styles from './SearchByChannelID.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

import network from '@lib/network';

import YouTubeUser from '@components/UI/YouTubeUser';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as youtubeActions from '@store/modules/youtube';

const TextFieldstyles = theme => ({
    cssOutlinedInput: {
        height:'65px',
        '&$cssFocused $notchedOutline': {
          borderColor:  '#ff3b94',
        },
    },
  
    cssOutlinedInput_Multi: {        
        '&$cssFocused $notchedOutline': {
          borderColor:  '#ff3b94',
        },
    },
  
    cssFocused: {},
    notchedOutline: {
        borderRadius: '10px',
    },
  });

class SearchByChannelID extends React.Component {

    state = {
        value: ''
    }

    onChange = event => {
        console.log('onChange');
        this.setState({value: event.target.value});
    }

    handleSearch = async() => {
        console.log('handleSearch');
        const recv = await network('youtube','SearchByChannelID', {id: this.state.value});
        console.log(recv);

        const { YoutubeActions } = this.props;
        YoutubeActions.setChannelData({channel: recv.channel});
    }

    render() {
        const { value } = this.state;
        const { classes, channel } = this.props;  
        return (
            <div className={cx('SearchByChannelID')}>
                <Typography className={cx('SearchByChannelID__Title')}>SearchByChannelID</Typography> 
                <div className={cx('SearchByChannelID__TypoWrp')}>
                    <TextField                                               
                        margin="normal"
                        variant="outlined"
                        fullWidth        
                        className={cx('SearchByChannelID__Typo')}
                        onChange={this.onChange}
                        value={value}       
                        type='string'         
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                    <Button className={cx('SearchByChannelID__Typo__Button')} onClick={this.handleSearch}>
                        <SearchIcon/>
                    </Button>
                </div>
                {channel.id !== undefined && <YouTubeUser />}
            </div>
        );
    }
}

export default withStyles(TextFieldstyles)(connect(
    (state) => ({
        channel: state.youtube.get('user').get('channel'),        
    }),
    (dispatch) => ({
        YoutubeActions: bindActionCreators(youtubeActions, dispatch),    
    })
)(SearchByChannelID));