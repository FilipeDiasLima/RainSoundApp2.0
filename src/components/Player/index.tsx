import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AudioButton, Container, PlayButton, SettingButton } from './styles'
import { Audio } from 'expo-av';

const SampleTrack = require('../../assets/pow.mp3')

export default function Player() {
  const [isPlay, setIsPlay] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const sound = useRef(new Audio.Sound());

  async function PlayAudio() {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) { }
  }

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
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
        PlayAudio()
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
    LoadAudio();
  }, [])

  useEffect(() => {
    if (!isPlay) {
      PauseAudio()
    } else {
      PlayAudio()
    }
  }, [isPlay])

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