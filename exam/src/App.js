import './App.css';
import {Provider} from "react-redux";
import {AppRouter} from './components/AppRouter'
import MainPage from './pages/mainPage/mainPage'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <AppRouter/>
      </Provider>
    </div>
  );
}

export default App;
