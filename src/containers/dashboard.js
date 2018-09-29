import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import { Link, BrowserRouter, Router } from 'react-router-dom'

const Dashboard =()=>(
    
      <div>

        <h1>Dashboadrd</h1>
          <div>
            <Link to='/:id'>Home</Link>
            <Link to='/edit/:id'>Edit</Link>
          </div>
      </div>
    
  
)


export default Dashboard;

