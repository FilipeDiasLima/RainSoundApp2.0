import { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { AudioButton, Container, PlayButton, SettingButton } from './styles'

import { PlayerContext } from '../../context/PlayerContext'
import { useNavigation } from '@react-navigation/native'

const Player = () => {
  const { toggleVolume, toggleSound, isPlay } = useContext(PlayerContext)

  const { navigate } = useNavigation()

  return (
    <Container>
      <AudioButton onPress={toggleVolume}>
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
      <SettingButton onPress={() => navigate('RainSettings' as never)}>
        <Ionicons name="md-settings" size={35} color="#001524" />
      </SettingButton>
    </Container>
  )
}

export default Player