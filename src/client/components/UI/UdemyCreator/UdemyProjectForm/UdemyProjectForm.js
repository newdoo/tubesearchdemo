import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyProjectForm.scss';
const cx = classNames.bind(styles);

import UdemyProjectCreate from './Create';
import UdemyProjectUpdate from './Update';

class UdemyProjectForm extends React.Component {

    componentDidMount() {
        // TODO : 나의 프로젝트 데이터 호출
        const { id } = this.props;
    }

    render() {
        const { id } = this.props;
        return(
            <React.Fragment>
                {id === 'add' ? <UdemyProjectCreate />:<UdemyProjectUpdate />}
            </React.Fragment>
        )
    }
}

export default UdemyProjectForm;