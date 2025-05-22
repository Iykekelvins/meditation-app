import { LinearGradient } from 'expo-linear-gradient';
import { ColorValue, Dimensions, SafeAreaView } from 'react-native';

const { height } = Dimensions.get('window');

const AppGradient = ({
	children,
	colors,
}: {
	children: React.ReactNode;
	colors: [ColorValue, ColorValue, ...ColorValue[]];
}) => {
	return (
		<LinearGradient className='flex-1' colors={colors} style={{ height }}>
			<SafeAreaView className='flex-1 mx-5 py-20'>{children}</SafeAreaView>
		</LinearGradient>
	);
};

export default AppGradient;
