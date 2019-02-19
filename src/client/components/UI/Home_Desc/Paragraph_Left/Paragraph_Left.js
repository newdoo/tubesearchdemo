import React from 'react';

import classNames from 'classnames/bind';
import styles from './Paragraph_Left.scss';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { getLanguage } from '@lib/language';
import ReactHtmlParser from 'react-html-parser';

import { UnderScreen , OverScreen } from '@components/Common/Responsive_utilities';

class Paragraph_Left extends React.Component {

    render() {
        const { title, desc, image, language } = this.props;

        return (
            <div className = { cx('Paragraph_Left')}>   

                <OverScreen>
                    <div className={cx('Paragraph_Wrp')}>
                        <div className = { cx('Paragraph_Left_text')}>    
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

                        <div className = { cx('Paragraph_Left_image')}>      
                            <img src = { image } />
                        </div>   
                    </div>
                </OverScreen>
                <UnderScreen>
                    <div className={cx('Paragraph_Wrp')}>
                        <div className = { cx('Paragraph_Left_image')}>      
                            <img src = { image } />
                        </div>
                        <div className = { cx('Paragraph_Left_text')}>    
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
                </UnderScreen>
            </div>            
        );
    }
}

export default connect(
    (state) => ({
      language: state.ui.get('ui').get('language'),
    })
)(Paragraph_Left);