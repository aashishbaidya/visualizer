import React from "react";
import { Link } from 'react-router-dom'

const Dashboard =()=>(
    
      <div>

        <h1>Dashboadrd</h1>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/edit'>Edit</Link>
            <Link to='/stuff'>Stuff</Link>
          </div>
      </div>
    
  
)
export default Dashboard;

