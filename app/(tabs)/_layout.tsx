import { Tabs } from 'expo-router';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary,
			}}>
			<Tabs.Screen
				name='nature-meditate'
				options={{
					tabBarLabel: 'Meditate',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='flower-tulip' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='affirmations'
				options={{
					tabBarLabel: 'Affirmations',
					tabBarIcon: ({ color }) => (
						<Entypo name='open-book' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
