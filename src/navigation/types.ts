import {
  StackNavigationOptions
} from '@react-navigation/stack';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
export enum NAVIGATION_TYPES {
  STACK,
  TAB,
  DRAWER,
  MODAL
}

export interface StackScreen {
  name: string;
  component?: any;
  options?: StackNavigationOptions;
  initialParams?: {[key: string]: string};
  stackScreens?: StackScreen[];
  tabScreens?: TabScreen[];
  drawerScreens?: DrawerScreen[];
}
export interface DrawerScreen {
  name: string;
  component?: any;
  options?: DrawerNavigationOptions;
  initialParams?: {[key: string]: string};
  stackScreens?: StackScreen[];
}

export interface TabScreen {
  name: string;
  component?: any;
  options?: BottomTabNavigationOptions;
  initialParams?: {[key: string]: string};
  stackScreens?: StackScreen[];
}

export interface NavigationStructure {
  drawerScreens?: DrawerScreen[];
  modals?: StackScreen[];
  stackScreens?: StackScreen[];
  tabScreens?: TabScreen[];
}

