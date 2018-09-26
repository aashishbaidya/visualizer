import React from "react";
import { connect } from 'react-redux'
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import FabButtons from "../components/fabButtons/app"
import {bindActionCreators} from 'redux'
import { remove_widget, update_widget_layout, update_forms } from '../actions'
import EditModal from '../components/EditCharts'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class EditDashboardContents extends React.Component {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  constructor(props) {
    super(props);
    this.state = {
      fabbuttons: [{name:'pie', text:'Charts', icon:'fas fa-chart-pie'}, {name:'Chart', text:'Image', icon:'far fa-image'}],
      is_editing: false,
      edit_widget: {},


    };
    this.edit_Widget = this.edit_Widget.bind(this);
    this.edit_Finish = this.edit_Finish.bind(this);
  }

  componentDidMount(){
     fetch("https:app.fieldsight.org/fieldsight/api/project/forms/137/", {
      method: 'GET',
      credentials: 'include'
      })
    .then(res => res.json())
    .then(
      (result) => {
          const form_options = this.state.forms.concat(result);
     
      },
      (error) => {
     
      }
    )
  }

  createWidget(el, remove_widget) {
    const removeStyle = {
      position: "absolute",
      right: "6px",
      top: "6px",
      cursor: "pointer"
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        
          <span className="text">{i}</span>
          <span
          className="remove"
          style={removeStyle}
          onClick={() => this.edit_Widget(el)}
          >
          <li className="far fa-edit fa-lg"></li>
        </span>
      </div>
    );
  }
// onClick={() => remove_widget(el.id)}
  edit_Widget(el, save_widget){
    this.setState({is_editing: true, edit_widget: el})
  }

  edit_Finish(){
    this.setState({is_editing: false, edit_widget:{}})
  }

  render() {    
      
      return (
          <div>
            <ResponsiveReactGridLayout
              onDragStop = {this.props.update_widget_layout}
              onResizeStop = {this.props.update_widget_layout}>
            {_.map(this.props.widgets, el => this.createWidget(el, this.props.remove_widget))} 
            </ResponsiveReactGridLayout>
            <FabButtons buttons={this.state.fabbuttons} createnew={this.onAddItem}/>
            <EditModal visible={this.state.is_editing} edit_widget={this.state.edit_widget} edit_Finish={this.edit_Finish}/>
          </div>
        );
  }
}

const mapStateToProps = (state) => {
  return {
    widgets: state.widgets,
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({update_widget_layout, update_forms}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDashboardContents);

