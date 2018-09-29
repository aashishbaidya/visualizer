import React from "react";
import { connect } from 'react-redux'
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import FabButtons from "../components/fabButtons/app"
import {bindActionCreators} from 'redux'
import { remove_widget, update_widget_layout, update_forms } from '../actions'
import EditModal from '../components/EditCharts'
import WidgetComponent from '../components/widget'

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
    const {id} = this.props.match.params
    this.setState({dashboard_id: id})

    fetch("https:app.fieldsight.org/fieldsight/api/project/reportdashboard/"+ id +"/", {
      method: 'GET',
      credentials: 'include'
      })
    .then(res => res.json())
    .then(
      (result) => {
          this.setState({project_id: result.project_id})
          this.props.update_widgets(result.widgets)
          this.fetchForms()
      },
      (error) => {
        
      }
    )
  }

  fetchForms(){
    fetch("https:app.fieldsight.org/fieldsight/api/project/forms/"+ this.state.project_id +"/", {
      method: 'GET',
      credentials: 'include'
      })
    .then(res => res.json())
    .then(
      (result) => {
          this.props.update_forms(result)
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
      <div key={i + 'l'} data-grid={el}>
        
          <span className="text">{i}</span>
          <span
          className="remove"
          style={removeStyle}
          onClick={() => this.edit_Widget(el)}
          >
          <li className="far fa-edit fa-lg"></li>
          
        </span>
        <WidgetComponent/>
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
      console.log("rendered");
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

