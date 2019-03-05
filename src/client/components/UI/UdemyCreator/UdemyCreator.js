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

    handleShowProject = () => {
        console.log('handleShowProject');
    }

    render() {
        const { project } = this.props;
        return(
            <React.Fragment>
            {project === '' && <UdemyProjectList onAdd={this.handleAddProject} onShow={this.handleShowProject} />}
            {project !== '' && <UdemyProjectForm id={project} />}
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        project: state.ui.get('ui').get('creator_project'),     
    }),
)(UdemyCreator);
  
  