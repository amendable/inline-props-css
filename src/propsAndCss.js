import _ from 'lodash';
import { hasProperty } from '@amendable/inline-style-properties';
import extractStateProp from './extractStateProp';

export default (originalProps) => {
  const css = {};
  const props = {};

  Object.keys(originalProps).forEach(key => {
    const value = originalProps[key];
    const withState = extractStateProp(key);

    if (withState) {
      _.merge(css, { [withState.key]: { [withState.prop]: value } });
    } else if (hasProperty(key)) {
      css[key] = value;
    } else if (key === 'css') {
      _.merge(css, originalProps[key]);
    } else {
      props[key] = value;
    }
  });

  return { css, props };
}
