import { useContext, useEffect, useState } from 'react';
import { TimerContext } from '@/context/TimerContext';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { AUDIO_FILES, MEDITATION_DATA } from '@/constants/meditation-data';

import meditationImages from '@/constants/meditation-images';
import AppGradient from '@/components/app-gradient';
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
	const { id } = useLocalSearchParams();
	const { duration: secondsRemaining, setDuration } = useContext(TimerContext);

	// const [secondsRemaining, setSecondsRemaining] = useState(10);
	const [isMeditating, setIsMeditating] = useState(false);
	const [audio, setAudio] = useState<Audio.Sound>();
	const [isPlayingAudio, setPlayingAudio] = useState(false);

	// Format the timeLeft to ensure two digits are displayed
	const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(
		2,
		'0'
	);

	const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, '0');

	const toggleMeditationSessionStatus = async () => {
		// Only reset timer if starting a new session and timer is at 0
		if (!isMeditating && secondsRemaining === 0) {
			setDuration(10);
		}

		setIsMeditating(!isMeditating);

		await toggleSound();
	};

	const toggleSound = async () => {
		const sound = audio ? audio : await initializeSound();

		const status = await sound?.getStatusAsync();

		if (status?.isLoaded && !isPlayingAudio) {
			await sound.playAsync();
			setPlayingAudio(true);
		} else {
			await sound.pauseAsync();
			setPlayingAudio(false);
		}
	};

	const initializeSound = async () => {
		const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

		const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

		setAudio(sound);
		return sound;
	};

	const handleAdjustDuration = () => {
		if (isMeditating) toggleMeditationSessionStatus();

		router.push('/(modal)/adjust-meditation-duration');
	};

	useEffect(() => {
		// Exit
		if (secondsRemaining === 0) return;

		const timerId = setTimeout(() => {
			if (isMeditating) {
				setDuration(secondsRemaining - 1);
			}
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [secondsRemaining, isMeditating, setDuration]);

	useEffect(() => {
		return () => {
			audio?.unloadAsync();
		};
	}, [audio]);

	useEffect(() => {
		return () => {
			setDuration(() => 10);
		};
	}, [setDuration]);

	return (
		<View className='flex-1'>
			<ImageBackground
				source={meditationImages[Number(id) - 1]}
				resizeMode='cover'
				className='flex-1'>
				<AppGradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-16 left-0 z-10'>
						<AntDesign name='leftcircleo' size={50} color='white' />
					</Pressable>

					<View className='flex-1 justify-center'>
						<View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
							<Text className='text-4xl text-blue-800 font-rmono'>
								{formattedTimeMinutes}:{formattedTimeSeconds}
							</Text>
						</View>
					</View>

					<View className='mb-5'>
						<CustomButton title='Adjust Duration' onPress={handleAdjustDuration} />
						<CustomButton
							title={!isMeditating ? 'Start Meditation' : 'Stop'}
							onPress={toggleMeditationSessionStatus}
							containerStyles='mt-4'
						/>
					</View>
				</AppGradient>
			</ImageBackground>
		</View>
	);
};

export default Meditate;
