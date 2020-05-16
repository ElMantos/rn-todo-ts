import { AsyncStorage } from "react-native";

export default async (
  key: string,
  callback: (val: any) => void,
  defaultVal: any
) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      callback(JSON.parse(value));
    } else {
      callback(defaultVal);
    }
  } catch (error) {
    throw new error();
  }
};
