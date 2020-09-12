import React from 'react';

import './Results.css';
import { ResultItem } from './ResultItem/ResultsItem';

const Results = (props) => {
  const { isSearchLoading, results, query } = props;
  return (
    !isSearchLoading &&
    results.length > 0 && (
      <div id="results" className="results-container">
        {results.map(
          (result) =>
            result.title && (
              <ResultItem
                key={result.objectID}
                title={result.title}
                points={result.points}
                author={result.author}
                comments={result.num_comments}
                url={result.url}
                query={query}
              />
            )
        )}
      </div>
    )
  );
};

const memoizedResults = React.memo(Results);

export { memoizedResults as Results };
