import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyCreator.scss';
const cx = classNames.bind(styles);

import AddIcon from '@material-ui/icons/Add';

class UdemyCreator extends React.Component {
    render() {
        return(
            <div className={cx('UdemyCreator')}> 
                <div className={cx('UdemyCreator__Project')}>
                    <div className={cx('UdemyCreator__Project__Card')}> 
                        <div className={cx('UdemyCreator__AddProject__CardItem')}> 
                            <AddIcon className="material-icons" />
                            <span className="text"> 프로젝트 추가 </span> 
                        </div> 
                    </div> 
                </div>
                <div className={cx('UdemyCreator__Project')}> 
                    <div className={cx('UdemyCreator__Project__Card')}>
                        <div className={cx('UdemyCreator__Project__Wrp')}> 
                            <div className="title">SpielBit</div> 
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default UdemyCreator;