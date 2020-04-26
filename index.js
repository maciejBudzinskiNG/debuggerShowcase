/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
YellowBox.ignoreWarnings(['']);
AppRegistry.registerComponent(appName, () => App);
