import {
  Link as DefaultLink,
  LinkProps as DefaultLinkProps,
} from "expo-router";
import { StyleProp, ViewStyle } from "react-native";

type LinkProps = DefaultLinkProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Link({ children, style, ...props }: LinkProps) {
  return (
    <DefaultLink style={style} {...props}>
      {children}
    </DefaultLink>
  );
}
