import React from 'react';
import PropTypes from 'prop-types';

import { TYPES } from './constants';
// import { filterOutTypeSith } from './ComponentA.helpers';

/*
Task:
- Filter out siths from characters array
- Use a testable pure function to filter 
*/
export const ComponentA = ({
  list,
}) => {
  const jedi = list;
  // const jedi = list.filter(item => item.type !== TYPES.SITH);

    return (
    <ul>
      {jedi.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

ComponentA.propTypes = {
  list: PropTypes.array,
};

ComponentA.defaultProps = {
  list: [],
};

export default ComponentA;
