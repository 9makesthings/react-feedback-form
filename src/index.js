import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducer....
const feedbackReducer = ( state = {
                                feeling: 0,
                                understanding: 0,
                                support: 0,
                                comments: ''
    }, action ) => {

        if(action.type === 'ADD_FEELING'){
            return state = {
                ...state,
                feeling: action.payload
            };
        }
        if(action.type === 'ADD_UNDERSTANDING'){
            return state = {
                ...state,
                understanding: action.payload
            };
        }
        if(action.type === 'ADD_SUPPORT'){
            return state = {
                ...state,
                support: action.payload
            };
        }
        
        
        return state;
}


const storeInstance = createStore(
    combineReducers({
        // reducers....
        feedbackReducer,
    }),
    applyMiddleware( logger ),
);

ReactDOM.render(
    <Provider store={storeInstance} >
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
