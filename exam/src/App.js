import './App.css';
import React from 'react'
import {Provider} from "react-redux";
import AppRouter from './components/AppRouter';
import {store} from './store'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Provider store={store}>
              <BrowserRouter>
                <AppRouter/>
              </BrowserRouter>
          </Provider>
    </div>
  );
}

export default App;
