import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';

import { HomeTabNavigator } from '@features/authentication/tab-navigator';
import { Info } from '@features/un-authentication/info';
import { Policy } from '@features/un-authentication/policy';
import { Terms } from '@features/un-authentication/terms';
import { Welcome } from '@features/un-authentication/welcome';
import { useSelector } from '@hooks';
import { AppModule } from '@native-module';
import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state
  const { token, welcomeComplete } = useSelector(state => state.app);

  // effect
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 3000);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!token) {
      // clean cache when logout
      AppModule.clearCache();
    }
  }, [token]);

  // render
  return (
    <RootStack.Navigator
      initialRouteName={welcomeComplete ? APP_SCREEN.HOME : APP_SCREEN.WELCOME}
      screenOptions={{ headerShown: false }}>
      {token === undefined ? (
        <RootStack.Group
          screenOptions={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
          }}>
          <RootStack.Screen name={APP_SCREEN.WELCOME} component={Welcome} />
          <RootStack.Screen name={APP_SCREEN.INFO} component={Info} />
          <RootStack.Screen
            name={APP_SCREEN.TERMS_OF_SERVICE}
            component={Terms}
          />
          <RootStack.Screen
            name={APP_SCREEN.PRIVACY_POLICY}
            component={Policy}
          />
          <RootStack.Screen
            name={APP_SCREEN.HOME}
            component={HomeTabNavigator}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group
          screenOptions={{
            gestureEnabled: false,
          }}>
          <RootStack.Screen
            name={APP_SCREEN.HOME}
            component={HomeTabNavigator}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
