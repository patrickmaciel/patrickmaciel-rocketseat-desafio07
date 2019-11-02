import Reactotron, { asyncStorage } from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";

if (__DEV__) {
  const tron = Reactotron.configure({
    host: "localhost",
    enabled: true,
    port: 9090,
  })
    .use(asyncStorage())
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.tron = tron;

  tron.clear();
}
