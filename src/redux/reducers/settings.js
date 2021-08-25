import { SET_IS_BUTTON_ACTIVE, SET_OPTION_VALUE } from '../../constants/action-types';

const defaultState = {
  isButtonActive: false,
  optionValue: 'a',
};

function settings(state = defaultState, action) {
  switch (action.type) {
    case SET_IS_BUTTON_ACTIVE:
      return {
        ...state,
        isButtonActive: action.isButtonActive,
      };

    case SET_OPTION_VALUE:
      return {
        ...state,
        optionValue: action.optionValue,
      };

    default:
      return state;
  }
}

export default settings;
