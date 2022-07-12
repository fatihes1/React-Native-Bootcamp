/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Oluşturduğumuz App dosyası içeri alınır
import App from './App';
import {name as appName} from './app.json';

// Bu fonksiyon ile bu App dosyasını çağır.
AppRegistry.registerComponent(appName, () => App);
