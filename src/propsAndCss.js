import { hasProperty } from '@amendable/inline-style-properties';

export default (originalProps) => {
  const css = {};
  const props = {};

  Object.keys(originalProps).forEach(key => {
    const value = originalProps[key];

    if (hasProperty(key)) {
      css[key] = value;
    } else if (key === 'css') {
      Object.assign(css, originalProps[key]);
    } else {
      props[key] = value;
    }
  });

  return { css, props };
}
