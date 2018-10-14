import React from "react";
import { connect } from 'react-redux'
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import FabButtons from "../components/fabButtons/app"
import {bindActionCreators} from 'redux'
import { add_initial_widgets, update_widget_layout, update_forms } from '../actions'
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
      el_index: -1,
      notifications: [],
      base_url: "http://fieldsight.naxa.com.np",
      project_id: null


    };
    this.remoteSaveWidgets = this.remoteSaveWidgets.bind(this);
    this.edit_Widget = this.edit_Widget.bind(this);
    this.edit_Finish = this.edit_Finish.bind(this);
  }

  componentDidMount(){
    const {id} = this.props.match.params
    this.setState({dashboard_id: id})

    fetch(this.state.base_url + "/report/api/dashboard-data/"+ id +"/", {
      method: 'GET',
      credentials: 'include'
      })
    .then(res => {console.log(res)
      switch (res.status){
        case 200:
          return res.json()
        case 404:
          return alert("404 Error, Dashboard not found.")
        case 403:
          return alert('Please Login')
        default:
          return alert('Error Occured. Contact Admin.')
        }
        
      })

    .then(
      (result) => {
        console.log(result);  
        this.setState({project_id: result.project})
          this.props.add_initial_widgets(result.dashboardData)
          
          
          
          this.fetchForms()
        },
      (error) => {
        console.log(error)
        
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

  fetchDatas(){
    // this.props.widgets.forEach(function (widget, index) {
    //   fetch("https:app.fieldsight.org/fieldsight/api/project/forms/"+ this.state.project_id +"/", {
    //     method: 'GET',
    //     credentials: 'include'
    //     })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //         this.props.update_forms(result)
    //     },
    //     (error) => {
      
    //     }
    //   )
    // })
  }

  remoteSaveWidgets(){
    console.log("hereee", this.props.widgets)
    fetch(this.state.base_url + "/report/api/dashboard-data/"+ this.state.dashboard_id +"/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        "dashboardData":JSON.stringify(this.props.widgets)
        })
      })
    .then(res => res.json())
    .then(
      (result) => {
          console.log('successfully this.remoteSaveWidgets.')
      },
      (error) => {
    
      }
    )
  }
  
  
  createWidget(el, index, remove_widget) {
    console.log("create widget");
    const removeStyle = {
      position: "absolute",
      right: "6px",
      top: "6px",
      cursor: "pointer"
    };
    if (!el.y){
      el.y = 0
    }
    return (

      <div key={index} data-grid={el}>
        <WidgetComponent i={index} widget={el} base_url={this.state.base_url} project_id={this.state.project_id}/>
          <span
            className="remove"
            style={removeStyle}
            onClick={() => this.edit_Widget(el, index)}
            >
            <li className="far fa-edit fa-lg"></li>
          </span>
      </div>
    );
  }
// onClick={() => remove_widget(el.id)}
  edit_Widget(el, index){
    this.setState({is_editing: true, el_index:index, edit_widget: el})
  }

  edit_Finish(){
    this.setState({is_editing: false, edit_widget:{}, el_index:-1})
  }

  render() {    
      console.log("rendered now");
      
      return (
          <div>
            
            <ResponsiveReactGridLayout
              onDragStop = {this.props.update_widget_layout}
              onResizeStop = {this.props.update_widget_layout}>
              {this.props.widgets.map((el, index) => this.createWidget(el, index, this.props.remove_widget))} 
            </ResponsiveReactGridLayout>
            <FabButtons buttons={this.state.fabbuttons} remoteSave={this.remoteSaveWidgets}/>
            <EditModal visible={this.state.is_editing} edit_widget={this.state.edit_widget} el_index={this.state.el_index} edit_Finish={this.edit_Finish}/>
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
  return bindActionCreators({add_initial_widgets, update_widget_layout, update_forms}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDashboardContents);

