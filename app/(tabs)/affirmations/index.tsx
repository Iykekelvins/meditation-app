import { View, Text, ScrollView } from 'react-native';

import AppGradient from '@/components/app-gradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuidedAffirmationsGallery from '@/components/guided-affirmations-gallery';

const Affirmations = () => {
	return (
		<View className='flex-1'>
			<AppGradient colors={['#2e1f5a', '#54426b', '#a790af']}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text className='text-zinc-50 text-3xl font-bold'>
						Change your beliefs with affirmations
					</Text>

					<View>
						{AFFIRMATION_GALLERY.map((g) => (
							<GuidedAffirmationsGallery
								key={g.title}
								title={g.title}
								previews={g.data}
							/>
						))}
					</View>
				</ScrollView>
			</AppGradient>
		</View>
	);
};

export default Affirmations;
