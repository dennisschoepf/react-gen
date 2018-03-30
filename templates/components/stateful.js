const stateful = name => (
`// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
};

type State = {

};

const Wrapper = styled.div\`
  
\`;

class ${name} extends Component<Props, State> {
  /* Default props for flow */
  static defaultProps = {

  };

  /* Constructor and state initialization */
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  /* Component lifecycle methods */

  render(): Node {
    const { children } = this.props;

    return (
      <Wrapper>{children}</Wrapper>
    );
  };
};

export default ${name};`
);

module.exports = stateful;