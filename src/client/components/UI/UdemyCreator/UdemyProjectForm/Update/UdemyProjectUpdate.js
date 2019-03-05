import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyProjectUpdate.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select , TextField, Switch  } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";

import network from '@lib/network';

import { connect } from 'react-redux';

import UISnackbars from '@components/Common/UISnackbars';

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

class UdemyProjectUpdate extends React.Component {

    state = {
        id: '',
        title: '',
        desc: '',
        price: 0,
        check: false,
    }

    componentDidMount() {
        console.log('componentDidMount');
        // 나의 프로젝트 데이터 호출
        const { project } = this.props;
        console.log(project);
        this.setState({
            id: project._id,
            title: project.title,
            desc: project.desc,
            price: project.price,
            check: project.open
        });
    }

    handleChange = name => event => {  
        console.log(name);
        console.log(event.target.value);  
        this.setState({ [name]: event.target.value });  
    }

    handleCheckChange = name => event => {  
        console.log(name);
        console.log(event.target.checked);  
        this.setState({ [name]: event.target.checked });  
    }

    updateProject = async() => {
        console.log('updateProject');
        const { user } = this.props;
        const {id,title,desc,price,check} = this.state;
        const params = {
            uid: user.uid,
            id: id,
            title: title,
            desc: desc,      
            price: price,      
            open: check,                   
        };
           
        const recv = await network('udemy', 'updateProject', params);
        console.log(recv);

        if(recv.result === "ok") {
            UISnackbars({type: 'success', message: "프로젝트를 업데이트하였습니다."});
        } else {
            UISnackbars({type: 'success', message: "프로젝트 업데이트에 실패하였습니다."});
        }
    }

    render() {
        const { classes, project } = this.props;
        const { title, desc, price, check } = this.state;
        return(
            <div className={cx('UdemyProjectForm')}>
                <div className={cx('row')}>
                    <Typography className={cx('title')} >제목 : </Typography> 
                    <TextField                                               
                        margin="normal"
                        variant="outlined"
                        fullWidth        
                        className={cx('typo')}
                        onChange={this.handleChange('title')}
                        value={title}       
                        type='string'
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                </div>
                <div className={cx('row')}>
                    <Typography className={cx('title')} >설명 : </Typography> 
                    <TextField                                               
                        id="outlined-bare"                                                                
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows="10"
                        fullWidth
                        className={cx('typo')}
                        onChange={this.handleChange('desc')}
                        value={desc}       
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput_Multi,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                </div>
                <div className={cx('row')}>
                    <Typography className={cx('title')} >가격 : </Typography> 
                    <TextField                                               
                        margin="normal"
                        variant="outlined"
                        fullWidth        
                        className={cx('typo')}
                        onChange={this.handleChange('price')}
                        value={price}       
                        type='number'
                        InputProps={{
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                                input: classes.cssInput,
                            },
                        }}
                    />
                </div>
                <div className={cx('row')}>
                    <Typography className={cx('visibility')} >공개 설정 {check===true?' (Public) : ':' (Private) : '}</Typography> 
                    <Switch
                        className="right"
                        checked={check}
                        onChange={this.handleCheckChange('check')}
                        value='check'
                    /> 
                </div>
                <div className={cx('row')}>
                    <Button 
                        onClick={this.updateProject} 
                        variant="outlined" 
                        className={cx('button')}>
                        업데이트
                    </Button>
                </div>
                
            </div>
        )
    }
}

export default withStyles(TextFieldstyles)(connect(
    (state) => ({
        user: state.youtube.get('user').get('user'),        
    }),
)(UdemyProjectUpdate));