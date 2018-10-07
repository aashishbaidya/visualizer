import React from 'react'
import './style.css'



class Alert extends React.Component {
    constructor() {
      super();
      this.state = {
        showingAlert: true
        
    };

    setTimeout(() => {
        this.setState({
          showingAlert: false
        });
      }, 5000);
    }
    
    
    render() {
      return (
            <div className={`alert alert-`+ this.props.type +` ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                <button type="button" class="close" data-dismiss="alert">x</button>
                { props.text }
            </div>      
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));



export default Alert