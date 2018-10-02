import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip} from 'recharts';


const SimpleBar = (props) => {
    const sampledate = [
        {name: 'Page A', data: 4000},
        {name: 'Page B', data: 3000},
        {name: 'Page C', data: 2000},
        {name: 'Page D', data: 2780},
        {name: 'Page E', data: 1890},
        {name: 'Page F', data: 2390},
        {name: 'Page G', data: 3490},
    ];
    return (
        <ResponsiveContainer width="98%" height="98%">
        
            <BarChart data={sampledate}
            margin={{top: 35, right: 0, left: 0, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                {/* {this.props.is_edit_mode ? <Tooltip/> : <div></div>} */}
                <Tooltip/>
                <Legend />
                <Bar dataKey="data" fill="#8884d8" />
                
            </BarChart>
        </ResponsiveContainer>
    )
}

// Object.keys(this.props.questions).map((el, key) => {
//     return <Bar dataKey={key in this.props.customData ? this.props.customData[key].label:el}
//     fill={key in this.props.customData ? this.props.customData[key].color : '#82ca9d'} />
// })

export default SimpleBar