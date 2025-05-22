import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import AppGradient from '@/components/app-gradient';

const beachImgBg = require('../assets/meditation-images/beach.webp');

const App = () => {
	const router = useRouter();
	return (
		<View className='flex-1'>
			<ImageBackground source={beachImgBg} resizeMode='cover' className='flex-1'>
				<AppGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
					<SafeAreaView className='flex-1 px-1  justify-between'>
						<View>
							<Text className='text-white text-center text-4xl font-bold'>
								Simple Meditation
							</Text>
							<Text className='text-center text-white font-normal text-2xl mt-3'>
								Simplifying Meditation for Everyone
							</Text>
						</View>

						<View>
							<CustomButton
								title='Get Started'
								onPress={() => router.push('/nature-meditate')}
							/>
						</View>
						<StatusBar style='light' />
					</SafeAreaView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
};

export default App;
