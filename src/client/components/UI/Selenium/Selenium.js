import React from 'react';

import classNames from 'classnames/bind';
import styles from './Selenium.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField, Switch  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import network from '@lib/network';

class Selenium extends React.Component {

    runTest = async() => {
        console.log('runTest');
        const recv = await network('selenium','test',{});
        console.log(recv);
    }
    
    render() {
        return (
            <div>
                <Button 
                    onClick={this.runTest} 
                    variant="outlined" 
                    className={cx('button')}>
                    실행
                </Button>
                <a href="http://play.afreecatv.com/aflol/212089431" onclick="javascript:oAnalysisUtil.setClickLog('main_00000003','watch_type=live&amp;bj_id=aflol&amp;broad_no=212089431category_no=00040019&amp;bps=8000&amp;resolution=1920x1080'); " class="box_link" target="_blank">
                    <span class="grbox"></span> 
                    <span class="ic_1080p">1080p</span>
                    <span class="thumb">
                        <img src="//liveimg.afreecatv.com/212089431_240x135.gif?25867240" onerror="this.src='//res.afreecatv.com/images/afmain/img_thumb_v.gif'" title="" />
                    </span>
                    <span class="info">
                        <em class="grade">8000K</em>
                        <span class="time">2019-03-08 16:31:14 방송시작</span>
                    </span>
                    <span class="subject">[생][SKT vs 그리핀] 2019 LCK 스프링</span>
                    <span class="viewer">
                        <em></em>26,689 명 시청
                    </span>
                    <span class="count">
                        <em class="pc"></em>8,522
                        <em class="mobile"></em>18,167
                    </span>
                </a>
            </div>
        )
    }
}

export default Selenium;