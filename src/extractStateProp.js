import _ from 'lodash';
import { hasProperty } from '@amendable/inline-style-properties';

const states = ['visited', 'hover', 'focus', 'active', 'placeholder'];
const statesRegex = new RegExp(`(${states.join('|')})(\\w+)`);

export default (propName) => {
  const matches = propName.match(statesRegex);
  if (!matches) {
    return;
  }

  const state = matches[1];
  const prop = _.camelCase(matches[2]);
  if (!hasProperty(prop)) {
    return;
  }

  const key = state === 'placeholder' ? `::${state}` : `&:${state}`;

  return { state, prop, key };
};
