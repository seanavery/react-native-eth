// import Trade from './src/components/index';
// import TradeForm from './src/components/index';
//
// import {
//   AppRegistry,
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   TouchableHighlight,
// } from 'react-native';
//
// import {
//   createRouter,
//   NavigationProvider,
//   StackNavigation,
// } from '@exponent/ex-navigation';
//
// import React, { Component } from 'react';
//
// export const Router = createRouter(() => ({
//   trade: () => Trade,
//   tradeform: () => TradeForm,
// }));
//
// // class client extends Component {
// //   render() {
// //     return (
// //       <NavigationProvider router={Router}>
// //         <StackNavigation
// //           initialRoute={Router.getRoute('trade')}
// //         />
// //
// //       </NavigationProvider>
// //     );
// //   }
// // }
// class App extends React.Component {
//   render() {
//     /**
//       * NavigationProvider is only needed at the top level of the app,
//       * similar to react-redux's Provider component. It passes down
//       * navigation objects and functions through context to children.
//       *
//       * StackNavigation represents a single stack of screens, you can
//       * think of a stack like a stack of playing cards, and each time
//       * you add a screen it slides in on top. Stacks can contain
//       * other stacks, for example if you have a tab bar, each of the
//       * tabs has its own individual stack. This is where the playing
//       * card analogy falls apart, but it's still useful when thinking
//       * of individual stacks.
//       */
//     return (
//       <NavigationProvider router={Router}>
//         <StackNavigation
//           defaultRouteConfig={{
//             navigationBar: {
//               backgroundColor: '#a8a8a8',
//               tintColor: '#fff',
//             }
//           }}
//           initialRoute={Router.getRoute('trade')}
//         />
//
//       </NavigationProvider>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// console.log('Router main', Router)
//
// AppRegistry.registerComponent('client', () => App);

import React, { Component } from 'react';
// import Drawer from './src/components/Drawer';
import Landing from './src/components/Landing';
import Trade from './src/components/Trade';
import TradeForm from './src/components/TradeForm';

console.log('Landing', Landing);

import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

/**
 * If you're using Exponent, uncomment the line below to import Exponent
 * BEFORE importing `@exponent/ex-navigation`. This sets the status bar
 * offsets properly.
 */
// import Exponent from 'exponent';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';


/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export const Router = createRouter(() => ({
  landing: () => Landing,
  trade: () => Trade,
  tradeform: () => TradeForm,
}));

console.log('Router', Router);
console.log('Landing', Landing)

class App extends React.Component {
  render() {
    /**
      * NavigationProvider is only needed at the top level of the app,
      * similar to react-redux's Provider component. It passes down
      * navigation objects and functions through context to children.
      *
      * StackNavigation represents a single stack of screens, you can
      * think of a stack like a stack of playing cards, and each time
      * you add a screen it slides in on top. Stacks can contain
      * other stacks, for example if you have a tab bar, each of the
      * tabs has its own individual stack. This is where the playing
      * card analogy falls apart, but it's still useful when thinking
      * of individual stacks.
      */
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#a8a8a8',
              tintColor: '#fff',
            }
          }}
          initialRoute={Router.getRoute('tradeform')}
        />

      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('client', () => App);
