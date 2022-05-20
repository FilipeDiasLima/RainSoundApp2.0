import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AudioButton, Container, PlayButton, SettingButton } from './styles'
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
interface PlayerProps {
  trigger?: boolean
}

const SampleTrack = require('../../assets/pow.mp3')

const Player = ({ trigger }: PlayerProps) => {
  const [isPlay, setIsPlay] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const { goBack } = useNavigation()

  let sound = useRef<Audio.Sound>(new Audio.Sound());

  async function playAudio() {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) { }
  }

  const pauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) { }
  };

  const stopAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.stopAsync();
        }
        goBack()
      }
    } catch (error) { }
  };

  const toggleSound = () => {
    setIsPlay(!isPlay)
  }

  const LoadAudio = async () => {
    setLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          setLoading(false);
          console.log('Error in Loading Audio');
        } else {
          setLoading(false);
          setLoaded(true);
        }
        playAudio()
        setIsPlay(!isPlay)
        sound.current.setIsLoopingAsync(true)
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    Audio.setAudioModeAsync({
      // playsInSilentModeIOS: true,
      // allowsRecordingIOS: false,
      staysActiveInBackground: true,
      // interruptionModeIOS: 1,
      // shouldDuckAndroid: true,
      // interruptionModeAndroid: 1,
      // playThroughEarpieceAndroid: true,
    });
    LoadAudio();
  }, [])

  useEffect(() => {
    if (!isPlay) {
      pauseAudio()
    } else {
      playAudio()
    }
  }, [isPlay])

  useEffect(() => {
    stopAudio()
  }, [trigger])

  return (
    <Container>
      <AudioButton >
        <Ionicons name="volume-medium-sharp" size={35} color="#001524" />
      </AudioButton>
      <PlayButton
        onPress={toggleSound}
        style={{
          shadowOpacity: 0.7,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0
          },
          elevation: 10,
          borderRadius: 393,
        }}
      >
        {!isPlay ?
          <Ionicons name="play" size={50} color="#001524" style={{ marginLeft: 10 }} />
          :
          <Ionicons name="pause" size={50} color="#001524" style={{ marginLeft: 3 }} />
        }
      </PlayButton>
      <SettingButton>
        <Ionicons name="md-settings" size={35} color="#001524" />
      </SettingButton>
    </Container>
  )
}

export default Player