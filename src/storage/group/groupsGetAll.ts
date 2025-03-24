import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../storageConfig";

export async function groupsGetAll() {
	try {
		const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

		const groups: string[] = storage ? JSON.parse(storage) : [];

		return groups;
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: Deixando o tratamento de erro para a função que chamar o metodo
		throw error;
	}
}
