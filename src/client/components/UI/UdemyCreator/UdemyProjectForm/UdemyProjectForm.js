import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyProjectForm.scss';
const cx = classNames.bind(styles);

import UdemyProjectCreate from './Create';
import UdemyProjectUpdate from './Update';

import { connect } from 'react-redux';

class UdemyProjectForm extends React.Component {

    componentDidMount() {

    }

    render() {
        const { id, project_list } = this.props;
        const project = project_list.find( o => o._id === id );
        return(
            <React.Fragment>
                {id === 'add' ? <UdemyProjectCreate />:<UdemyProjectUpdate project={project} />}
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        project_list: state.ui.get('ui').get('project_list'),   
    }),
)(UdemyProjectForm);