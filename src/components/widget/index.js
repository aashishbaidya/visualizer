import React from "react";
import SimpleBar from "../charts/bar";
import SimplePie from "../charts/pie";
import {ResponsiveContainer} from 'recharts';

class WidgetComponent extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {};
    }    

   
    render() { 
        switch (this.props.widget.data.chart_id) {
            
            case "1":
                return (<SimplePie/>)

            case "2":
                return (<SimpleBar/>)
    
            default:
                return (<div></div>)
            }
        }
    }
        
export default WidgetComponent