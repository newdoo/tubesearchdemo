import { Link } from '@common/routes'
import Button from '@material-ui/core/Button'
import styles from './Line_Evently.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const Line_Evently = props => {    

  if(props.children[0] === undefined) {
      return (
        <div className = { cx('Line_Evently_forget_line') } style = {{ height: props.comp_height === undefined ? 'auto' : props.comp_height}} >         
        {
            <div className = { cx('Line_Evently_forget_full' , 'Line_Evently_forget_half_left' , props.align === 'top' && 'Line_Evently_top' )  }  > 
                { props.children.props.children }
            </div>
        }
        </div>              
      );
  }

  return (
    <div className = { cx('Line_Evently_forget_line') } style = {{ height: props.comp_height === undefined ? 'auto' : props.comp_height}} >
    {
        props.children[0] !== undefined &&
        <div className = { cx('Line_Evently_forget_half' , 'Line_Evently_forget_half_left' , props.align === 'top' && 'Line_Evently_top' )  }  > 
            { props.children[0].props.children }
        </div>
    }
    
    {
        props.children[1] !== undefined &&
        <div className = { cx('Line_Evently_forget_half','Line_Evently_forget_half_right' ,  props.align === 'top' && 'Line_Evently_top') }  > 
            { props.children[1].props.children !== undefined && props.children[1].props.children }
        </div>
    }  
    </div>              
            
  )    
}
  
export default Line_Evently;

