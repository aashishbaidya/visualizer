import React from "react";
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

class WidgetComponent extends React.Component {
  

    constructor(props) {
      super(props);
      this.state = {};

    }
  

    render() { 
        const data = [
            {
                label: "Series 1",
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: "Series 2",
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
            ]

        const sty = {height:'100%', width:'100%'}
        return (
        <div style={sty}>
            <Chart data={data}>
  <Axis primary type="time" position="bottom" />
  <Axis type="linear" position="left" />
  <Series type={Line} />
  <Cursor primary />
  <Cursor />
  <Tooltip />
</Chart>

        </div>
        )
    }
  }
  
  

  
  export default WidgetComponent
  