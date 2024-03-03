import { toast as ReactToast } from 'react-toastify';

import { errorMessages } from './errorMessages';

export const toast = {
  promise: (asyncFunction, successFunction, pendingMessage) =>
    ReactToast.promise(asyncFunction, {
      pending: pendingMessage || 'Verificando seus dados',
      success: successFunction
        ? {
            render({ data }) {
              return successFunction(data);
            }
          }
        : undefined,
      error: {
        render({ data }) {
          if (
            data.code === 'ERR_NETWORK' ||
            data.response.status === 500 ||
            !data.response.data.error
          ) {
            return errorMessages.unexpected_error;
          }

          return errorMessages[data.response.data.error];
        }
      }
    })
};
