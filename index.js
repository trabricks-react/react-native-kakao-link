import { NativeModules } from "react-native";

const { ARNKakaoLink } = NativeModules;

export const link = {
  sendFeed: object => {
    ARNKakaoLink.sendFeed(object);
  },
  sendList: object => {
    ARNKakaoLink.sendList(object);
  },
  sendLocation: object => {
    ARNKakaoLink.sendLocation(object);
  },
  sendCommerce: object => {
    ARNKakaoLink.sendCommerce(object);
  },
  sendText: object => {
    ARNKakaoLink.sendText(object);
  },
  sendURL: object => {
    ARNKakaoLink.sendURL(object);
  }
};

export default link;
