import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyProjectList.scss';
const cx = classNames.bind(styles);

import AddIcon from '@material-ui/icons/Add';

class UdemyProjectList extends React.Component {

    componentDidMount() {
        // TODO : 나의 프로젝트 리스트 호출하기.
    }

    render() {
        const { onAdd, onShow } = this.props;
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
                <div className={cx('UdemyCreator__Project')}> 
                    <div className={cx('UdemyCreator__Project__Card')}>
                        <div className={cx('UdemyCreator__Project__Wrp')} onClick={onShow}> 
                            <div className="title">SpielBit</div> 
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default UdemyProjectList;