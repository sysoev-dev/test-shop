import { Provider } from 'react-redux';
import { store } from './app/store';
import Catalog from './components/catalog';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
