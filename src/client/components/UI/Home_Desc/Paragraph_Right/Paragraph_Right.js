import React from 'react';

import classNames from 'classnames/bind';
import styles from './Paragraph_Right.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';

class Paragraph_Right extends React.Component {

    render() {
        const { title ,  desc , image , imageLeft, language } = this.props;

        return (
            <div className = { cx('Paragraph_Right')}>  

                <div className={cx('Paragraph_Wrp')}>
                    <div className = { cx('Paragraph_Right_image')}>      
                        <img src = { image } />
                    </div> 

                    <div className = { cx('Paragraph_Right_title')}>    
                        <div className = { cx('Paragraph_title') } >
                        {
                            ReactHtmlParser(getLanguage(title, language))   
                        }
                        </div>

                        <div className = { cx('Paragraph_desc') } >
                        {
                            ReactHtmlParser(getLanguage(desc, language))
                        }
                        </div>       
                    </div>          
                </div>   
            </div>
        );
    }
}

export default connect(
    (state) => ({
      language: state.ui.get('ui').get('language'),
    })
)(Paragraph_Right);