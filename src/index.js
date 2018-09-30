import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './containers/main';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('root'));
registerServiceWorker();
