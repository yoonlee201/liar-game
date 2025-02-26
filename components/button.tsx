import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function Button({ children, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={style} {...props}>
      {children}
    </TouchableOpacity>
  );
}
