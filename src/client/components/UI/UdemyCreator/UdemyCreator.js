import React from 'react';

import classNames from 'classnames/bind';
import styles from './UdemyCreator.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { Router } from '@common/routes';

import UdemyProjectList from './UdemyProjectList';
import UdemyProjectForm from './UdemyProjectForm';

class UdemyCreator extends React.Component {

    handleAddProject = () => {
        console.log('handleAddProject');
        Router.pushRoute('udemy_creator_project', {id: 'add'});
    }

    handleShowProject = (id) => {
        console.log('handleShowProject : ' + id);
        Router.pushRoute('udemy_creator_project', {id: id});
    }

    render() {
        const { project, user } = this.props;
        return(
            <React.Fragment>
                {project === '' && <UdemyProjectList user={user} onAdd={this.handleAddProject} onShow={this.handleShowProject} />}
                {project !== '' && <UdemyProjectForm id={project} />}
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        user: state.youtube.get('user').get('user'),
        project: state.ui.get('ui').get('creator_project'),
    }),
)(UdemyCreator);
  
  