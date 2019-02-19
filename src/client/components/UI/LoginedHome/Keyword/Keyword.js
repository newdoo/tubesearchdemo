import React from 'react';

import classNames from 'classnames/bind';
import styles from './Keyword.scss';
import PropTypes from 'prop-types';

//mateirl-ui
import { Drawer , Typography , Fab , Button , Divider , IconButton, MuiThemeProvider , Tabs , Tab , Menu , MenuItem ,  Select   } from '@material-ui/core/';

const cx = classNames.bind(styles);

import Line_Evently from '@components/Common/Line_Evently';

import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

const Keyword_datas = [
               {title:'School',style:'Keyword_1'}, 
               {title:'Cute',style:'Keyword_2'}, 
               {title:'Tiger',style:'Keyword_3'}, 

               {title:'Green',style:'Keyword_4'}, 
               {title:'Wish',style:'Keyword_5'}, 
               {title:'Mate',style:'Keyword_6'}, 

               {title:'Love',style:'Keyword_7'}, 
               {title:'Family',style:'Keyword_8'}, 
               {title:'Food',style:'Keyword_9'}, 
];


class Keyword extends React.Component {

  state = {    
    font: 'Montserrat-Medium',  
  };

  componentDidMount() {    
    this.timer = setInterval(this.progress, 3000);
    this.progress();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    this.setState({ font: "Montserrat-Medium" });
  };

  getFontSize = () => {
    const min = 16;
    const max = 25;
    const rand = min + Math.random() * (max - min);
    return rand;
  }

  render() {            
    const { menu } = this.props;
    const {font } = this.state;
    console.log("z font=" + font);
    return (        
      <div className = { cx('Keyword')}>       
          <Line_Evently align="top" comp_height = { 42 } >
            <div >
              <Typography className = { cx('Keyword_title') } >  Keyword </Typography>                     
            </div>
          </Line_Evently>
         
          <TagCloud 
          
            style={{
              fontFamily: "Montserrat-Medium",
              
              fontSize: 17 ,
              fontWeight: '500',
              fontStyle: 'normal',          
              color: { font } ,
              color: () => randomColor(),
              color:'#ff3b94',
              padding: 5,
              width: '100%',
              height: '80%',          
            }}>

        
        {
                Keyword_datas.map(( data ,i) => (
                  <div key= { i }  style={{fontSize: this.getFontSize() }}> 
                    { data.title }
                  </div>
               ))
        }
        
      </TagCloud>
      </div>      
    );
  }
}

export default Keyword;
