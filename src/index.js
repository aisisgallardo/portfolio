import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Work from './components/Work';
import Home from './components/Home';
import About from './components/About';

const myRouter = createBrowserRouter ([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"work",
        element:<Work />,
      },
      {
        path:"",
        element:<Home />,
      },
      {
        path:"About",
        element:<About />,
      },
    ]
    
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router = {myRouter} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
