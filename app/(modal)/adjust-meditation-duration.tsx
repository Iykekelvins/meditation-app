import { useContext } from 'react';
import { TimerContext } from '@/context/TimerContext';
import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

import AppGradient from '@/components/app-gradient';
import CustomButton from '@/components/CustomButton';

const AdjustMeditationDuration = () => {
	const { setDuration } = useContext(TimerContext);

	const handlePress = (duration: number) => {
		setDuration(duration);
		router.back();
	};
	return (
		<View className='flex-1'>
			<AppGradient colors={['#161e2e', '#0a4d4a', '#766e67']}>
				<Pressable
					onPress={() => router.back()}
					className='absolute top-8 left-0 z-10'>
					<AntDesign name='leftcircleo' size={50} color='white' />
				</Pressable>

				<View className='justify-center h-4/5'>
					<Text className='text-center font-bold text-3xl text-white mb-8'>
						Adjust your meditation duration
					</Text>

					<View>
						<CustomButton
							title='10 seconds'
							onPress={() => handlePress(10)}
							containerStyles='mb-5'
						/>
						<CustomButton
							title='5 minutes'
							onPress={() => handlePress(5 * 60)}
							containerStyles='mb-5'
						/>
						<CustomButton
							title='10 minutes'
							onPress={() => handlePress(10 * 60)}
							containerStyles='mb-5'
						/>
						<CustomButton
							title='15 minutes'
							onPress={() => handlePress(15 * 60)}
							containerStyles='mb-5'
						/>
					</View>
				</View>
			</AppGradient>
		</View>
	);
};

export default AdjustMeditationDuration;
