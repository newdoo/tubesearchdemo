import React from 'react';
import classNames from 'classnames/bind';
import styles from './SearchByChannelName.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer, Typography, Fab, Button, Divider, IconButton, MuiThemeProvider, Tabs, Tab, Menu, MenuItem, Select, TextField } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

import network from '@lib/network';

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

class SearchByChannelName extends React.Component {

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
    }

    render() {
        const { value } = this.state;
        const { classes } = this.props;  
        return (
            <div className={cx('SearchByChannelID')}>
                <Typography className={cx('SearchByChannelID__Title')}>SearchByChannelName</Typography> 
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
            </div>
        );
    }
}

export default withStyles(TextFieldstyles)(SearchByChannelName);