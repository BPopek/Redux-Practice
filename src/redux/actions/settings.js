import { SET_IS_BUTTON_ACTIVE, SET_OPTION_VALUE } from '../../constants/action-types';

export const setIsButtonActive = (isButtonActive) => ({
  type: SET_IS_BUTTON_ACTIVE,
  isButtonActive,
});

export const setOptionValue = (optionValue) => ({
  type: SET_OPTION_VALUE,
  optionValue,
});
