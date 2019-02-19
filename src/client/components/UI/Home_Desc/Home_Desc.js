import React from 'react';

import classNames from 'classnames/bind';
import styles from './Home_Desc.scss';
const cx = classNames.bind(styles);

import Paragraph_Left from '@components/UI/Home_Desc/Paragraph_Left';
import Paragraph_Right from '@components/UI/Home_Desc/Paragraph_Right';

import { connect } from 'react-redux';

class Home_Desc extends React.Component {

  render() {        
    const { language } = this.props;
    const img_1 = "/static/images/Home/menu_1_" + language + ".png";
    const img_2 = "/static/images/Home/menu_2_" + language + ".png";
    const img_3 = "/static/images/Home/menu_3_" + language + ".png";
    return (        
      <div className = { cx('Home_Desc')}>
          <Paragraph_Left
            title="Home__3__1__Title"
            desc="Home__3__1__Desc" 
            image = {img_1}
           />

          <Paragraph_Right            
            title="Home__3__2__Title"
            desc="Home__3__2__Desc" 
            image = {img_2}
           />

          <Paragraph_Left
            title="Home__3__3__Title"
            desc="Home__3__3__Desc" 
            image = {img_3}
          />

      </div>      
    );
  }
}

export default connect(
  (state) => ({
    language: state.ui.get('ui').get('language'),
  })
)(Home_Desc);

