import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'

import { Container, Header, Content, TitlePage, Options, Option, OptionName, SwitchButton, Divisor, Footer } from './styles'
import { useContext, useEffect } from 'react'
import { PlayerContext } from '../../context/PlayerContext'

const RainSettings = () => {
  const { goBack } = useNavigation()

  const { toggleThunder, toggleWind, toggleRain, wind, thunder, rain } = useContext(PlayerContext)

  useEffect(() => {
    setTestDeviceIDAsync('EMULATOR')
  }, [])

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
            <OptionName>Rain</OptionName>
            <SwitchButton
              trackColor={{ false: "#dbdbdb", true: "#AEC3D2" }}
              thumbColor={rain ? "#313841" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleRain}
              value={rain}
            />
          </Option>
          <Divisor />

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
      <Footer>
        <AdMobBanner
          bannerSize='smartBannerPortrait'
          adUnitID='ca-app-pub-4792845809342776/1318701317'
          servePersonalizedAds
          onDidFailToReceiveAdWithError={e => console.log(e)}
        />
      </Footer>
    </Container>
  )
}

export default RainSettings