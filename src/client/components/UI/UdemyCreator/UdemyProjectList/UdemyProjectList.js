import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyProjectList.scss';
const cx = classNames.bind(styles);

import AddIcon from '@material-ui/icons/Add';

import network from '@lib/network';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

class UdemyProjectList extends React.Component {

    state = {
        uid: '',
        project: [],
    }

    componentDidMount() {
        // 라우터 적용 값이 바뀔때 마다 체크    
        const { user } = this.props;
        console.log(user);

        this.checkProject(user);
    }

    componentWillReceiveProps(nextProps) {    
        // 라우터 적용 값이 바뀔때 마다 체크    
        const { user } = nextProps;
        console.log(user);

        this.checkProject(user);
    }

    // 프로젝트 체크
    checkProject = async(user) => {
        if(user === null)
            return;

        const recv = await network('udemy', 'projectList', {uid: user.uid});
        console.log(recv);

        this.setState({project: recv.project});
        const { UiActions } = this.props;
        UiActions.setMyProject({list: recv.project});
    }

    render() {
        const { onAdd, onShow } = this.props;
        const { project } = this.state;
        return(
            <div className={cx('UdemyCreator')}> 
                <div className={cx('UdemyCreator__Project')}>
                    <div className={cx('UdemyCreator__Project__Card')} onClick={onAdd}> 
                        <div className={cx('UdemyCreator__AddProject__CardItem')}> 
                            <AddIcon className="material-icons" />
                            <span className="text"> 프로젝트 추가 </span> 
                        </div> 
                    </div> 
                </div>
                {project.map( (pp, i) => (
                    <div key={i} className={cx('UdemyCreator__Project')}> 
                        <div className={cx('UdemyCreator__Project__Card')}>
                            <div className={cx('UdemyCreator__Project__Wrp')} onClick={() => onShow(pp._id)}> 
                                <div className="title">{pp.title}</div> 
                            </div>
                        </div> 
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        menu: state.ui.get('ui').get('menu'),   
    }),
    (dispatch) => ({
        UiActions: bindActionCreators(uiActions, dispatch),  
    })
)(UdemyProjectList);