import { Container, type FilterStyleProps, Title } from "./styles";
import type { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps &
	FilterStyleProps & {
		title: string;
	};

export function Filter({ title, isActive = false, ...rest }: Props) {
	return (
		<Container isActive={isActive} {...rest}>
			<Title>{title}</Title>
		</Container>
	);
}
