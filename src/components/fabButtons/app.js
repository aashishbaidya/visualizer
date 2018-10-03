import React from 'react'
import { connect } from 'react-redux'
import { add_widget } from '../../actions'
import _ from "lodash";
import './style.css'
import {bindActionCreators} from 'redux'

const generateButtons = (el, createnew,) => {
	
	var obj = { x: 2,
	         	y: 0,
	          	w: 4,
	          	h: 2,}
	return (<a key={el.name} className="fabbuttons" tooltip={el.text} onClick={() => createnew(obj)}><i className={el.icon + " fa-2x sub-fab-margin"}></i></a>);
}

const FabButtons = (props) => (	
	<div><nav className="fabcontainer"  >
      {	_.map(props.buttons, el => generateButtons(el, props.add_widget))}
 		<a className="fabbuttons"><i className="fas fa-2x fa-plus fab-margin"></i></a>
		 {console.log(props)}
 	</nav>
	<nav className="save"><a className="fabbuttons" tooltip="Save" onClick={() => props.remoteSave()}><i className="fas fa-2x fa-save fab-margin"></i></a></nav>
	</div>
	 )

function mapDispatchToProps(dispatch){
	return bindActionCreators({add_widget}, dispatch);
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add_widget: () => dispatch(add_widget),
//   };
// };

export default connect(null, mapDispatchToProps)(FabButtons)
