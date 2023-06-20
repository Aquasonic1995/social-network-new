import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerender = () => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}
rerender()

reportWebVitals();
