const stories = name => (
`import React from 'react';
import { storiesOf } from '@storybook/react';
import ${name} from './${name}';
import props from './${name}.mock';

storiesOf('Components/${name}', module)
  .add('online', () => (
    <${name} {...props} />
  ))
`
);

module.exports = stories;