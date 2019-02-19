import React from 'react';

import classNames from 'classnames/bind';
import styles from './Account_Popup.scss';
const cx = classNames.bind(styles);

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

//link
import { Link } from '@common/routes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '@store/modules/ui';
import * as loginActions from '@store/modules/login';


import { getLanguage } from '@lib/language';

import ReactHtmlParser from 'react-html-parser';

import { createMuiTheme } from '@material-ui/core/';    

import LoginedPopupMenu from '@components/Common/LoginedPopupMenu';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

import Account_Left from '@components/UI/Account_Popup/Account_Left';
import Account_Right from '@components/UI/Account_Popup/Account_Right';

import network from '@lib/network';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Account_Popup extends React.Component {

  state = {    
    user_name:'',
    password:'',
    password_new:'',
    email:'',
    country:0,
    paypal_id:'',

    image:null,
    image_url:'',

    your_profile:'',
    web_address:'',
    facebook_id:'',
    instagram_id:'',
    behance_id:'',
    dribble_id:'',    
  };


  handleChange = name => event => {    
    console.log("handleChange");
    console.log("name=" + name );
    console.log("event.target.value" + event.target.value);
    this.setState({ [name]: event.target.value });
  }

  onFileChange  = name => event => {        
    console.log("onFileChange");
    console.log("name=" + name );
    console.log("event.target.value" + event.target.files);
    this.setState({ [name]: event.target.files[0] });

    let reader = new FileReader();
    let url = reader.readAsDataURL(event.target.files[0]);
    
    reader.onloadend = function (e) {
      console.log(reader.result);
      this.setState({
        image_url: [reader.result]
      })
    }.bind(this);    
  }

  handle_send = async() => {
    console.log("onclick");

    const { language , login_data  } = this.props;
    const { country } = this.state;

    let formData = new FormData();
    formData.append('country', '0');
    console.log(formData.get('country'));    
    const recv = await network("/webTest/webArtist/v2/artist/profileUpdate", "form-post", formData , login_data.token );   
    console.log(recv);


  }

  componentDidMount() {    
  }

  getProfile = async() => {
    const { login_data , LoginAction } = this.props;    
    console.log("getProfile________________________________");      
    {
      const recv = await network("/webTest/webArtist/v2/artist/profile", "get", {} , login_data.token );       
      let jsonStr = JSON.stringify(recv);
      let jsonParser = JSON.parse(jsonStr);
      console.log("________________________________");
      console.log(jsonParser);
      LoginAction.setAccountData({login_account: jsonParser });
    }
    
    console.log("________________________________");

    {
      const recv = await network("/webTest/webArtist/v2/artist/country", "get", {} , login_data.token );   
      let jsonStr = JSON.stringify(recv);
      let jsonParser = JSON.parse(jsonStr);
      console.log("________________________________");
      console.log(jsonParser);
      LoginAction.setCountryData({login_country: jsonParser });
    }
  }


  componentDidUpdate(prevProps, prevState) {    
    //팝업에서 서버 보낼때 componentDidMount 에 하면 안됨
    const { open , handleClose   } = this.props;    
    if(prevProps.open === false) {
      this.getProfile();
    }
  }




  render() {        
    const { language , login_data  } = this.props;
    const { open , handleClose   } = this.props;

    const { image , image_url  } = this.state;
    
    return (        
          <Dialog
          fullScreen
          open={ open }
          onClose={ handleClose}
          TransitionComponent={Transition}
          >

          <div className = { cx('Account_Popup')}>
            <LoginedPopupMenu handleClose ={ handleClose}  />
            <div className = { cx('Account_Popup_default')}>
              <div className = { cx('Account_Popup_div')}>                
                <div className = { cx('Account_Popup_left_div')} >            
                    <Account_Left handleChange = { this.handleChange } />
                  </div>

                  <div className = { cx('Account_Popup_right_div')} >                          
                    <Account_Right handleChange = { this.handleChange }  handle_send = { this.handle_send } onFileChange = { this.onFileChange('image') } image = { image_url }  />
                  </div>

              </div>

            </div>

          </div>      
        </Dialog>
    );
  }
}

export default connect(
  (state) => ({
    language: state.ui.get('ui').get('language'),
    logined_token: state.ui.get('ui').get('logined_token'),
    login_data:state.login.get('login').get('login_data'),    
  })
  ,
  (dispatch) => ({    
    LoginAction : bindActionCreators(loginActions, dispatch),    
  })
)(Account_Popup);

