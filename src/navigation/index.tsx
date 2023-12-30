import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DrawerScreen, NavigationStructure, StackScreen, TabScreen } from './types';
import { PrivacyPolicy } from 'lib_components';

export const createStack = (stackScreens: StackScreen[], modals?: StackScreen[]) => {
  const StackRoot = createStackNavigator();
  return (
    <StackRoot.Navigator screenOptions={{ headerShown: false }}>
      {stackScreens.map((stackScreen, index) => {
        const component = stackScreen.stackScreens
          ? () => createStack(stackScreen.stackScreens ?? [])
          : stackScreen.drawerScreens
          ? () => createDrawer(stackScreen.drawerScreens ?? [])
          : stackScreen.tabScreens
          ? () => createTabs(stackScreen.tabScreens ?? [])
          : stackScreen.component;
        return (
          <StackRoot.Screen
            key={index}
            name={stackScreen.name}
            component={component}
            initialParams={stackScreen.initialParams}
            options={stackScreen.options}
          />
        );
      })}

      {modals && (
        <StackRoot.Group screenOptions={{ presentation: 'modal' }}>
          {modals.map((modal, index) => (
            <StackRoot.Screen
              key={index}
              name={modal.name}
              component={modal.component}
              initialParams={modal.initialParams}
              options={modal.options}
            />
          ))}
        </StackRoot.Group>
      )}
    </StackRoot.Navigator>
  );
};
export const createDrawer = (drawerScreens: DrawerScreen[]) => {
  const DrawerRoot = createDrawerNavigator();
  return (
    <DrawerRoot.Navigator useLegacyImplementation>
      {drawerScreens.map((drawerScreen, index) => {
        const component = drawerScreen.stackScreens
          ? () => createStack(drawerScreen.stackScreens ?? [])
          : drawerScreen.component;
        return (
          <DrawerRoot.Screen
            key={index}
            name={drawerScreen.name}
            component={component}
            initialParams={drawerScreen.initialParams}
            options={drawerScreen.options}
          />
        );
      })}
    </DrawerRoot.Navigator>
  );
};
export const createTabs = (tabScreens: TabScreen[]) => {
  const TabRoot = createBottomTabNavigator();
  return (
    <TabRoot.Navigator>
      {tabScreens.map((tabScreen, index) => {
        const component = tabScreen.stackScreens
          ? () => createStack(tabScreen.stackScreens ?? [])
          : tabScreen.component;
        return (
          <TabRoot.Screen
            key={index}
            name={tabScreen.name}
            component={component}
            initialParams={tabScreen.initialParams}
            options={tabScreen.options}
          />
        );
      })}
    </TabRoot.Navigator>
  );
};

export const setupNavigation = (navigationStructure: NavigationStructure) => {
  //add internal modals
  navigationStructure.modals = [
    ...(navigationStructure.modals ?? []),
    {
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    },
  ];

  let rootStack;
  if (navigationStructure.drawerScreens) {
    rootStack = createDrawer(navigationStructure.drawerScreens ?? []);
  } else if (navigationStructure.tabScreens) {
    rootStack = createTabs(navigationStructure.tabScreens ?? []);
  } else {
    rootStack = createStack(navigationStructure.stackScreens ?? [], navigationStructure.modals);
  }
  return rootStack;
};

export * from './types';
