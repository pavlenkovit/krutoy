const fs = require('fs');
const path = require('path');

const minimist = require('minimist');
const args = minimist(process.argv, {
  alias: { name: 'n' },
});

const componentName = args.name;

fs.mkdirSync(path.resolve(__dirname, '..', 'components', componentName));

const componentCode = `import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import css from './${componentName}.module.scss';

class ${componentName} extends PureComponent {
  render() {
    return (
      <div className={css.container}>
      </div>
    );
  }
}

${componentName}.propTypes = {
};

export default ${componentName};`;

fs.writeFileSync(
  path.resolve(__dirname, '..', 'components', componentName, `${componentName}.jsx`),
  componentCode,
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'components', componentName, 'index.js'),
  `export { default } from './${componentName}';`,
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'components', componentName, `${componentName}.module.scss`), '',
);
