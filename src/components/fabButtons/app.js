import React from 'react'
import { connect } from 'react-redux'
import { add_widget } from '../../actions'
import _ from "lodash";
import './style.css'
import {bindActionCreators} from 'redux'

const generateButtons = (el, createnew,) => {
	var obj = { x: 2,
	         	y: 0,
	          	w: 2,
	          	h: 1,}
	return (<a key={el.name} className="fabbuttons" tooltip={el.text} onClick={() => createnew(obj)}><i className={el.icon + " fa-2x sub-fab-margin"}></i></a>);
}

const FabButtons = (props) => (	
	<nav className="container"  >
      {	_.map(props.buttons, el => generateButtons(el, props.add_widget))}
 		<a className="fabbuttons"><i className="fas fa-2x fa-plus fab-margin"></i></a>
 	</nav>
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
