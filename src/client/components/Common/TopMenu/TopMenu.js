import React from 'react';

import classNames from 'classnames/bind';
import styles from './TopMenu.scss';
const cx = classNames.bind(styles);

import { UnderScreen , OverScreen } from '@components/Common/Responsive_utilities';

import TopOver from './TopOver';
import TopUnder from './TopUnder';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';

class TopMenu extends React.Component {

  state = {    
    languageName: 'English',
    anchorEl: null,        
  };

  handle_button_Click = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handle_button_Close = ( event ) => {  
    
    console.log('handle_button_Close : ' + event);
    const { UiActions } = this.props;
    this.setState({ anchorEl: null });
    if(event !== '') {
        if(event === 'eng') {
            this.setState({ languageName : 'English' });
        } else {
            this.setState({ languageName : '한글' });
        }
        UiActions.setLanguage({language: event});
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {        
    
    const { menu, language } = this.props;
    const { anchorEl, languageName } = this.state;
    return (
      <React.Fragment>
        <OverScreen>
          <TopOver 
            languageName={languageName} 
            anchorEl={anchorEl}                        
            handleButtonClose={this.handle_button_Close}
            handleButtonClick={this.handle_button_Click}
          />
        </OverScreen>

        <UnderScreen>
          <TopUnder
            menu={menu}
            languageName={languageName} 
            anchorEl={anchorEl}               
            handleButtonClose={this.handle_button_Close}
            handleButtonClick={this.handle_button_Click}
          />
        </UnderScreen>

      </React.Fragment>     
    );
  }
}

export default connect(
  (state) => ({
    menu:state.ui.get('ui').get('menu'),    
    language: state.ui.get('ui').get('language'),    
  }),
  (dispatch) => ({
    UiActions: bindActionCreators(uiActions, dispatch),    
  })
)(TopMenu);

