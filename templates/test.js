const test = name => (
`import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import ${name} from './${name}';
import props from './${name}.mock';

describe('Component: ${name}', () => {
  describe('renders', () => {
    it('with snapshot renderer', () => {
      const tree = renderer
        .create(<${name} {...props} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with shallow renderer', () => {
      const element = shallow(<${name} {...props} />);
      expect(element).toBeDefined();
    });
  });
});`
);

module.exports = test;