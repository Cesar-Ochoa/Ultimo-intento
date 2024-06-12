// react-navigation.d.ts
declare module '@react-navigation/native' {
    import { ComponentType } from 'react';
    import {
      NavigationContainerProps,
      NavigationParams,
      NavigationScreenProp,
      NavigationState,
    } from 'react-navigation';
  
    export function NavigationContainer(
      props: NavigationContainerProps
    ): JSX.Element;
  
    export interface NavigationScreenConfigProps {
      navigation: NavigationScreenProp<NavigationState, NavigationParams>;
      screenProps: unknown;
    }
  
    export function useNavigation<T = NavigationScreenProp<NavigationState, NavigationParams>>(): T;
  }
  
  declare module '@react-navigation/stack' {
    import { ComponentType } from 'react';
    import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
  
    export function createStackNavigator(): ComponentType;
  }
  