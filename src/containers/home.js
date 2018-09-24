import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
const BaseLayout = () => (<div>
	
    	<Link to="/">Home</Link>
        <Link to="/stuff">Stuff</Link>
        <Link to="/edit">Edit</Link>
        

            <Route exact={true} path="/" component={Dashboard}/>
            <Route path="/edit" component={EditDashboardContents}/>
            <Route path="/stuff" component={Stuff}/>
          
     
    </div>)