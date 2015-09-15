import React from 'react';

export default ({ finishedCount, unfinishedCount }) => {
  const content = `finished: ${finishedCount}, unfinished: ${unfinishedCount}`;
  return <p>{ content }</p>;
};
