import React, { useEffect, useState } from 'react';

import './ResultItem.css';

const ResultItem = (props) => {
  const { title, author, comments, points, url, query } = props;

  const [titleNoQueryBefore, setTitleNoQueryBefore] = useState();
  const [titleQuery, setTitleQuery] = useState();
  const [titleNoQueryAfter, setTitleNoQueryAfter] = useState();

  useEffect(() => {
    const queryStartIndex = title.toUpperCase().indexOf(query.toUpperCase());
    const titleArray = title.split('');
    setTitleNoQueryBefore(titleArray.slice(0, queryStartIndex).join(''));
    setTitleQuery(
      titleArray.slice(queryStartIndex, queryStartIndex + query.length).join('')
    );
    setTitleNoQueryAfter(
      titleArray.slice(queryStartIndex + query.length, title.length).join('')
    );
  }, [query, title]);
  return (
    <>
      <div
        className="result-item-container"
        onClick={() => window.open(url, '_blank')}
      >
        <h2>
          {titleNoQueryBefore}
          <span className="keyword">{titleQuery}</span>
          {titleNoQueryAfter}
        </h2>
        <div className="extra-info">
          <span>{points} points | </span>
          <span>by {author} | </span>
          <span>{comments} comments</span>
        </div>
      </div>
      <hr />
    </>
  );
};

const memoizedResultItem = React.memo(ResultItem);

export { memoizedResultItem as ResultItem };
