import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const rerender = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>,
        </React.StrictMode>
    );
}
rerender()
store.subscribe(() => {
    rerender()
})

reportWebVitals();
