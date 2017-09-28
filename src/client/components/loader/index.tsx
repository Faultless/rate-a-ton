import * as React from 'react';
const styles = require('./index.css');

const Loader = () => (
  <div>
    <img
      src={'https://d30y9cdsu7xlg0.cloudfront.net/png/1076395-200.png'}
      alt="spinner loader"
      className={styles.spinner}
    />
  </div>
);

export default Loader;
