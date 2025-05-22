import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, SafeAreaView, Text, View } from 'react-native';

import beachImgBg from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';

const { height } = Dimensions.get('window');

const App = () => {
	return (
		<View className='flex-1'>
			<ImageBackground source={beachImgBg} resizeMode='cover' className='flex-1'>
				<LinearGradient
					className='flex-1'
					colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}
					style={{ height }}>
					<SafeAreaView className='flex-1 mx-5 my-12 justify-between'>
						<View>
							<Text className='text-white text-center text-4xl font-bold'>
								Simple Meditation
							</Text>
							<Text className='text-center text-white font-normal text-2xl mt-3'>
								Simplifying Meditation for Everyone
							</Text>
						</View>

						<View>
							<CustomButton title='Get Started' onPress={() => alert('tap')} />
						</View>
						<StatusBar style='light' />
					</SafeAreaView>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default App;
