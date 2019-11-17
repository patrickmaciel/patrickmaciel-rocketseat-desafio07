import Reactotron, { asyncStorage } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: 'localhost',
    enabled: true,
    port: 9090,
  })
    .use(asyncStorage())
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.tron = tron;

  tron.clear();
}
