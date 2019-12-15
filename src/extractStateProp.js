import _ from 'lodash';
import { hasProperty } from '@amendable/inline-style-properties';

const states = ['visited', 'hover', 'focus', 'active'];
const statesRegex = new RegExp(`(${states.join('|')})(\\w+)`);

export default (key) => {
  const matches = key.match(statesRegex);
  if (!matches) {
    return;
  }

  const state = matches[1];
  const prop = _.camelCase(matches[2]);
  if (!hasProperty(prop)) {
    return;
  }

  return { state, prop };
};
