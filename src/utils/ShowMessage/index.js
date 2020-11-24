import {showMessage, hideMessage} from 'react-native-flash-message';
import {colors} from '../Colors';

export const showError = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.error,
    color: colors.white,
  });
};

export const showSucces = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.primary,
    color: colors.white,
  });
};
