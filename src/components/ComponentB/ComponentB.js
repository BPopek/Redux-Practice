import React from 'react';

import { Wrapper } from './styles';
import { toUpperCase } from './helpers';
import { TITLE_TEXT } from './constants';

const ComponentB = () => (
  <Wrapper>
    {toUpperCase(TITLE_TEXT)}
  </Wrapper>
);

export default ComponentB;
