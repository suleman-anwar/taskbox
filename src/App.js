import './App.css';
import { Provider } from 'react-redux';
import store from './lib/redux';

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
