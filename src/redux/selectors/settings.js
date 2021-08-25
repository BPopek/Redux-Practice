import _ from 'lodash';

export function getSettings(state) {
  return _.get(state, 'settings');
}

export function getIsButtonActive(state) {
  const settings = getSettings(state);

  return _.get(settings, 'isButtonActive', false);
}

export function getOptionValue(state) {
  const settings = getSettings(state);

  return _.get(settings, 'optionValue', 'a');
}
