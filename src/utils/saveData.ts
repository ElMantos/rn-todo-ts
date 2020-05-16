import { AsyncStorage } from "react-native";

export default async (key: string, data: string) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    throw new error();
  }
};
