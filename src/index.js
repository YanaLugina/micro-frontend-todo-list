import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import reportWebVitals from './reportWebVitals';

// render micro frontend function
window.rendercreatereactapp = (containerId, history, data) => {
    console.log('data', containerId, history, data);
    ReactDOM.render(
        <React.StrictMode>
            <App history={history} data={data}/>
        </React.StrictMode>,
        document.getElementById(containerId)
    );
};

// unmount micro frontend function
window.unmountcreatereactapp = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('createreactapp-container')) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
