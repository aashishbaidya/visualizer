import React from "react"
import {bindActionCreators} from 'redux'
import {connect} from "react-redux"
import SimpleBar from "../charts/bar"
import SimplePie from "../charts/pie"
import { update_datas } from '../../actions'

class WidgetComponent extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {is_loading:true, data:[]};
      this.renderLoading = this.renderLoading.bind(this);
      this.renderReady = this.renderReady.bind(this);
      this.fetch_api = this.fetch_api.bind(this);
    }    

    componentDidMount(){
        if ((this.props.widget.data.form_id in this.props.datas) && (this.props.widget.data.form_question_name in this.props.datas[this.props.widget.data.form_id]))
        {   
            console.log("urlnotcalled");
            this.setState({data:this.props.datas[this.props.widget.data.form_id][this.props.widget.data.question_name]})
        }
        else if (this.props.widget.data.chart_id && this.props.widget.data.form_id && this.props.widget.data.form_question_name){
            console.log("urlcalled");
            var url
            var body
            switch (this.props.widget.data.chart_id) {
                case "1":
                    url = this.props.base_url + '/report/api/getSelectQuestionCount/' + this.props.project_id + '/'
                    body = {"question_name":this.props.widget.data.form_question_name, "fsxf_id":this.props.widget.data.form_id}
                    this.fetch_api(url, body)
                    return

                case "2":
                    url = this.props.base_url + '/report/api/getSelectQuestionCount/' + this.props.project_id + '/'
                    body = {"question_name":this.props.widget.data.form_question_name, "fsxf_id":this.props.widget.data.form_id}
                    this.fetch_api(url, body)
                    return
        
                default:
                    return 
            }    
        }
    }

    fetch_api(url, body){
        console.log("here", url);
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body
                })
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
                this.props.update_datas({form_id:this.props.widget.data.form_id, question_name:this.props.widget.data.question_name, "data":result})
                this.setState({data: result, is_loading:false})
            },
            (error) => {
                console.log(error) 
            }
        )
    }

    renderReady() {
        
        switch (this.props.widget.data.chart_id) {
            
            case "1":
                return (<SimplePie data={this.state.data}/>)

            case "2":
            console.log("bar bar");
                return (<SimpleBar data={this.state.data}/>)
    
            default:
                return (<div></div>)
            
        }
    }

    renderLoading() {
        return (<div>Loading ... </div>)
    }

    render() { 
        console.log('render here');
        if (this.state.is_loading == true)
        {
            return this.renderLoading()
        }
        else{

            return this.renderReady()
        }
        
    }
}
    
const mapStateToProps = (state) => {
    return {
        datas: state.datas,
    };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({update_datas}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetComponent);