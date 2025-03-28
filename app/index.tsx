import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { Routes } from "@src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="#202024"
				translucent
			/>
			{fontsLoaded ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
