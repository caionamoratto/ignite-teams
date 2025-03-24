import "styled-components/native";
import type theme from "@src/theme";

declare module "styled-components" {
	type ThemeType = typeof theme;

	export interface DefaultTheme extends ThemeType {}
}
