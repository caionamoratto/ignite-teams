import { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { groupsGetAll } from "@storage/group/groupsGetAll";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";
import { Loading } from "@src/components/Loading";

export function Groups() {
	const [isLoading, setIsLoading] = useState(true);
	const [groups, setGroups] = useState<string[]>([]);

	const navigation = useNavigation();

	function handleNewGroup() {
		navigation.navigate("new");
	}

	async function fetchGroups() {
		try {
			setIsLoading(true);

			const data = await groupsGetAll();

			setGroups(data);
			
		} catch (error) {
			console.log(error);
		} finally{
			setIsLoading(false);
		}
	}

	function handleOpenGroup(group: string){
		navigation.navigate('players', {group});
	}

	useFocusEffect(
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
		useCallback(() => {
			fetchGroups();
		}, []),
	);

	return (
		<Container>
			<Header />
			<Highlight title="Turmas" subtitle="Jogue com a sua turma" />
			{
				isLoading ? <Loading/> :
				<FlatList
				data={groups}
				keyExtractor={(item) => item}
				renderItem={({ item }) =>(
					<GroupCard 
					title={item}
					onPress={() => handleOpenGroup(item)}
					/>

				)}
				contentContainerStyle={groups.length === 0 && { flex: 1 }}
				ListEmptyComponent={() => (
					<EmptyList message="Que tal cadastrar a primeira turma?" />
				)}
				showsHorizontalScrollIndicator={false}
				/>
			}
			<Button title="Criar nova turma" onPress={handleNewGroup} />
		</Container>
	);
}
