import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './AutoSuggestInput.css';

import { CustomButton } from '../CustomButton';

import { search, clearSearch } from '../../../State/modules/_search/actions';
import { Results } from './Results';

const AutoSuggestInput = (props) => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const isSearchLoading = useSelector((state) => state.search.isLoading);
  const results = useSelector((state) => state.search.data);

  const _search = (value) => {
    setValue(value);
    if (value) {
      dispatch(search(value));
    } else {
      dispatch(clearSearch());
    }
  };

  return (
    <>
      <div data-testid="autoSuggestDivContainer" className="autosuggest-form">
        <div className="input-wrapper">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="search"
            placeholder="Search Query"
            value={value}
            onChange={(e) => _search(e.target.value)}
          />
          <Results
            query={value}
            isSearchLoading={isSearchLoading}
            results={results}
          />
        </div>
        <div className="button-wrapper">
          <CustomButton
            type="submit"
            text="Search"
            onClick={() => _search(value)}
          />
        </div>
      </div>
    </>
  );
};

const memoizedAutoSuggestInput = React.memo(AutoSuggestInput);

export { memoizedAutoSuggestInput as AutoSuggestInput };
