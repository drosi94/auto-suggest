import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { AutoSuggestInput } from './AutoSuggestInput';

const mockStore = configureStore([]);

let store;
let component;
describe('AutoSuggestInput Component', () => {
  beforeEach(() => {
    store = mockStore({
      search: { isLoading: false, error: '', data: [] },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <AutoSuggestInput />
      </Provider>
    );
  });
  it('should renders the div container', () => {
    renderer.act(() => {
      expect(
        component.root.findByProps({ 'data-testid': 'autoSuggestDivContainer' })
      ).not.toBeNull();
    });
  });

  it('should dispach an action on input change', () => {
    renderer.act(() => {
      component.root
        .findByType('input')
        .props.onChange({ target: { value: 'javascript' } });
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispach an action on button click', () => {
    renderer.act(() => {
      component.root
        .findByType('button')
        .props.onClick({ target: { value: 'javascript' } });
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
