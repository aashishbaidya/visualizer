import React from 'react'
import { connect } from 'react-redux'
import Select from '../select'
import {bindActionCreators} from 'redux'
import { update_widget_chart, update_widget_form, update_widget_form_question } from '../../actions'
class GenerateChartComponents extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = { charts: [{label:"Chart", id:1}, {label:"Bar", id:2}], widget:{}
    };
    this.update_Widget_Chart = this.update_Widget_Chart.bind(this);
    this.update_Widget_Form = this.update_Widget_Form.bind(this);
    this.update_Widget_Form_Question = this.update_Widget_Form_Question.bind(this);
    this.remove_Finish = this.remove_Finish.bind(this);
  }

  

  update_Widget_Chart(event){
  	console.log(event.target.value, this.props.widgets);
    this.props.update_widget_chart(this.props.widget.id, event.target.value)
  }

  update_Widget_Form(event){
  	this.props.update_widget_form(this.props.widget.id, event.target.value)
  }

  update_Widget_Form_Question(event){
    this.props.update_widget_form_question(this.props.widget.id, event.target.value)
  }

  remove_Finish(){
  }

  render() {    
    const chartOptions = this.state.charts.map((e, key) => {
  		return <option key={key} value={e.id}>{e.label}</option>;
  	})

  	const formOptions = this.props.forms.map((e, key) => {
      
      return <option key={key} value={e.id}>{e.name}</option>;
    })

    var index = this.props.forms.findIndex(form => form.id.toString() === this.props.widget.data.form_id);
  	var formQuestions = null;

  	// console.log("rerender", index, this.props.forms, this.props.widget.data.form_id);
  	if (index > -1){
  		formQuestions = this.props.forms[index].questions.map((e, key) => {
  			return <option key={key} value={e.name}>{e.label}</option>;
  		})
  	}
	
	return (
    <div className="form-field-item margin-top">
      <div className="form-group">
        <label className="col-form-label">Chart Type :</label>
  			<Select options={chartOptions} className="form-control" onChange={this.update_Widget_Chart.bind(this)} defaultValue={this.props.widget.data.chart_id}/>
	    </div>
      <div className="form-group">
        <label className="col-form-label">Form :</label>  		
        <Select options={formOptions} className="form-control" onChange={this.update_Widget_Form.bind(this)} defaultValue={this.props.widget.data.form_id}/>
			</div>
      <div className="form-group">
        <label className="col-form-label">Question :</label>
        <Select options={formQuestions} className="form-control" onChange={this.update_Widget_Form_Question.bind(this)} defaultValue={this.props.widget.data.form_question_name}/>
		  </div>
    </div>
	)	
  }
}


const mapStateToProps = (state) => {
  return {
    forms: state.forms,
    widgets: state.widgets
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({update_widget_chart, update_widget_form, update_widget_form_question}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GenerateChartComponents);
