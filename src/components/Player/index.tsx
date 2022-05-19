import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AudioButton, Container, PlayButton, SettingButton } from './styles'

export default function Player() {
  const [isPlay, setIsPlay] = useState(true)

  const togglePlay = () => {
    setIsPlay(!isPlay)
  }

  console.log(isPlay)

  return (
    <Container>
      <AudioButton >
        <Ionicons name="volume-medium-sharp" size={35} color="#001524" />
      </AudioButton>
      <PlayButton
        onPress={togglePlay}
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