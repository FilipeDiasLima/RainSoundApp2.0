import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'

import { Container, Header, Content, TitlePage, Options, Option, OptionName, SwitchButton, Divisor } from './styles'
import { useContext } from 'react'
import { PlayerContext } from '../../context/PlayerContext'

const RainSettings = () => {
  const { goBack } = useNavigation()

  const { toggleThunder, toggleWind, wind, thunder } = useContext(PlayerContext)

  return (
    <Container style={{ paddingTop: Constants.statusBarHeight + 20 }}>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Feather name="arrow-left" size={30} color="white" style={{ marginTop: 20 }} />
        </TouchableOpacity>
        <TitlePage>Rain Settings</TitlePage>
        <Feather name="arrow-left" size={30} color="transparent" />
      </Header>
      <Content>
        <Options>
          <Option>
            <OptionName>Wind</OptionName>
            <SwitchButton
              trackColor={{ false: "#dbdbdb", true: "#AEC3D2" }}
              thumbColor={wind ? "#313841" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleWind}
              value={wind}
            />
          </Option>

          <Divisor />

          <Option>
            <OptionName>Thunder</OptionName>
            <SwitchButton
              trackColor={{ false: "#dbdbdb", true: "#AEC3D2" }}
              thumbColor={thunder ? "#313841" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleThunder}
              value={thunder}
            />
          </Option>
        </Options>
      </Content>
    </Container>
  )
}

export default RainSettings