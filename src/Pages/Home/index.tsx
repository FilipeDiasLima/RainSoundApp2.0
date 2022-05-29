import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Container, RainButton, TitlePage, RainName, RainImage, Content, Footer, Header } from './styles'
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'
import Constants from 'expo-constants'

import simpleRain from '../../assets/simple-rain.png'
import { ScreenNameNavigation } from '../../types/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { navigate } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleChooseRainType(rainIndex: number) {
    navigate('RainTypes' as never, { rainIndex } as never);
  }

  useEffect(() => {
    setTestDeviceIDAsync('EMULATOR')
  }, [])

  return (
    <Container style={{ paddingTop: Constants.statusBarHeight + 20 }}>
      <Header>
        <TitlePage>RainSound</TitlePage>
      </Header>
      <Content>
        <RainButton onPress={() => handleChooseRainType(0)}>
          <RainImage source={simpleRain} />
          <RainName>Chuva simples</RainName>
          <Feather name="chevron-right" size={24} color="#313841" />
        </RainButton>
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