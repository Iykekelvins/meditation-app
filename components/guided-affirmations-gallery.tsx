import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';
import { View, Text, FlatList, Pressable, Image } from 'react-native';

interface GuidedAffirmationsGalleryProps {
	title: string;
	previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
	title,
	previews,
}: GuidedAffirmationsGalleryProps) => {
	return (
		<View className='my-5'>
			<View className='mb-4'>
				<Text className='text-white font-bold text-xl'>{title}</Text>
			</View>
			<View className='space-y-2'>
				<FlatList
					data={previews}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<Link href={`/affirmations/${item.id}`} asChild>
							<Pressable>
								<View className='h-36 w-36 rounded-md mr-4'>
									<Image
										source={item.image}
										resizeMode='cover'
										className='w-full h-full'
									/>
								</View>
							</Pressable>
						</Link>
					)}
					horizontal
				/>
			</View>
		</View>
	);
};

export default GuidedAffirmationsGallery;
