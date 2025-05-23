import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/app-gradient';

const AffirmationDetailPage = () => {
	const router = useRouter();
	const { itemId } = useLocalSearchParams();

	const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
	const [sentences, setSentences] = useState<string[]>([]);

	useEffect(() => {
		for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
			const affirmationData = AFFIRMATION_GALLERY[i].data;

			const findAffirmation = affirmationData.find(
				(item) => item.id === Number(itemId)
			);

			if (findAffirmation) {
				setAffirmation(findAffirmation);

				const affirmationsArray = findAffirmation.text.split('.');

				// Remove the last element if it's an empty string
				if (affirmationsArray[affirmationsArray.length - 1] === '') {
					affirmationsArray.pop();
				}

				setSentences(affirmationsArray);

				return;
			}
		}
	}, [itemId]);

	return (
		<View className='flex-1'>
			<ImageBackground
				source={affirmation?.image}
				resizeMode='cover'
				className='flex-1'>
				<AppGradient colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.9)']}>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-16 left-0 z-10'>
						<AntDesign name='leftcircleo' size={50} color='white' />
					</Pressable>

					<ScrollView className='mt-28' showsVerticalScrollIndicator={false}>
						<View className='h-full border-white justify-center'>
							<View className='h-4/5 justify-center'>
								{sentences.map((sentence, idx) => (
									<Text
										className='text-white text-3xl mb-12 font-bold text-center'
										key={idx}>
										{sentence}.
									</Text>
								))}
							</View>
						</View>
					</ScrollView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
};

export default AffirmationDetailPage;
