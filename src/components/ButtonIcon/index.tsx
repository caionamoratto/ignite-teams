import type { TouchableOpacityProps } from "react-native";
import { Container, Icon, type ButtonIconTypeStyleProps } from "./styles";
import type { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
	icon: keyof typeof MaterialIcons.glyphMap;
	type?: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ icon, type = "PRIMARY", ...rest }: Props) {
	return (
		<Container {...rest}>
			<Icon name={icon} type={type} />
		</Container>
	);
}
