import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import { Link, BrowserRouter, Router } from 'react-router-dom'

const Dashboard =()=>(
    
      <div>

        <h1>Dashboadrd</h1>
        <BrowserRouter>
          <div>
          <Link to='/'>Home</Link>
          <Link to='/edit'>Edit</Link>
          <Link to='/stuff'>Stuff</Link>
          </div>
        </BrowserRouter>
      </div>
    
  
)


export default Dashboard;

