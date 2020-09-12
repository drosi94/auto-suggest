import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import { AutoSuggestInput } from './Views/components/AutoSuggestInput';

import { store } from './State/store';

function App() {
  return (
    <Provider store={store}>
      <div data-testid="divContainer" className="form-container">
        <AutoSuggestInput />
      </div>
    </Provider>
  );
}

export default App;
