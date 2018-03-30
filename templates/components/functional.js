const functional = name => (
`// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

type Props = {
  
};

const Wrapper = styled.div\`
  
\`;

const ${name} = (props): Node => (
  <Wrapper {...props} />
);

export default ${name};`
);

module.exports = functional;
