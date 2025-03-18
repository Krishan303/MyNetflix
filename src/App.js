import './App.css';
import Body from './components.js/Body';
import { Provider } from 'react-redux';
import appStore from './utils.js/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <Body/>
    </Provider>
  )
}

export default App;
