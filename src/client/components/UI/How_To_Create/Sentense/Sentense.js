import React from 'react';

import classNames from 'classnames/bind';
import styles from './Sentense.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';

class Sentense extends React.Component {
    
    render() {        
        const { title, desc, pink_desc, language } = this.props;
        return (
            <div className= {cx('Sentense')}>
                
                {
                    title !== undefined && <div className = { cx('Sentense_br') } />
                }

                <div className = { cx('Sentense_title') } >
                {
                    ReactHtmlParser(getLanguage(title, language))               
                }
                </div>

                <div className = { cx('Sentense_br') } />

                <div className = { cx('Sentense_desc') } >
                {
                    ReactHtmlParser(getLanguage(desc, language))            
                }
                </div>                       

                <div className = { cx('Sentense_desc' , 'Sentense_desc_pink') } >
                {
                    ReactHtmlParser(getLanguage(pink_desc, language))              
                }
                </div>          
            </div>
        );
    }
}

export default connect(
    (state) => ({
        language: state.ui.get('ui').get('language'),    
    }),
)(Sentense);
