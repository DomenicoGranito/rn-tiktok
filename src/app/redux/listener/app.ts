import {
  checkKeyInObject,
  STORAGE_ASK_REGISTER,
  STORAGE_KEY_APP_THEME,
  STORAGE_KEY_TOKEN,
  STORAGE_NOTIFICATION,
  STORAGE_TRACKING,
  STORAGE_WELCOME_COMPLETE,
} from '@common';
import { takeLatestListeners } from '@listener';
import { MyAppTheme, ThemeType } from '@theme';
import { loadString, remove, save } from '@utils/storage';

import { appActions } from '../action-slice/app';

takeLatestListeners()({
  actionCreator: appActions.onLoadApp,
  effect: async (_, listenerApi) => {
    // remove(STORAGE_WELCOME_COMPLETE);
    // remove(STORAGE_ASK_REGISTER);
    // remove(STORAGE_NOTIFICATION);
    // remove(STORAGE_TRACKING);
    //
    const appTheme = loadString(STORAGE_KEY_APP_THEME);
    const token = loadString(STORAGE_KEY_TOKEN);
    const welcomeComplete = loadString(STORAGE_WELCOME_COMPLETE);
    const askRegister = loadString(STORAGE_ASK_REGISTER);
    if (typeof token === 'string') {
      listenerApi.dispatch(appActions.onSetToken(token));
    } else {
      // no token & haven't ask yet
      if (askRegister === undefined) {
        listenerApi.dispatch(appActions.onSetAskRegisterAttempt(true));
      }
    }
    if (typeof welcomeComplete === 'string') {
      listenerApi.dispatch(appActions.onSetWelcomeComplete(true));
    }
    if (
      typeof appTheme === 'string' &&
      checkKeyInObject(MyAppTheme, appTheme)
    ) {
      listenerApi.dispatch(appActions.onSetAppTheme(appTheme as ThemeType));
    }
    listenerApi.dispatch(appActions.onLoadAppEnd());
  },
});

takeLatestListeners()({
  actionCreator: appActions.onPopupRegister,
  effect: async (_, listenerApi) => {
    // save(STORAGE_ASK_REGISTER, '1');
    listenerApi.dispatch(appActions.onModalOpen('REGISTER_POPUP'));
  },
});
