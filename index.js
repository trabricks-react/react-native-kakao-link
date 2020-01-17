import { NativeModules } from "react-native";

const { ARNKakaoLink } = NativeModules;

const sendFeed = object => {
  return ARNKakaoLink.sendFeed(object);
};
const sendList = object => {
  return ARNKakaoLink.sendList(object);
};
const sendLocation = object => {
  return ARNKakaoLink.sendLocation(object);
};
const sendCommerce = object => {
  return ARNKakaoLink.sendCommerce(object);
};
const sendText = object => {
  return ARNKakaoLink.sendText(object);
};
const sendURL = object => {
  return ARNKakaoLink.sendURL(object);
};

export default {
  sendFeed,
  sendList,
  sendLocation,
  sendCommerce,
  sendText,
  sendURL
};
