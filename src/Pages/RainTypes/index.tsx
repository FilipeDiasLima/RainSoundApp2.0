import { useContext, useEffect, useState } from 'react';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'
import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native'

import simpleRain from '../../assets/simple-rain.png'
import Clock from '../../components/Clock';
import Player from '../../components/Player';
import { Container, Header, RainImage, Content, TitlePage, Footer } from './styles'

import { PlayerContext } from '../../context/PlayerContext';

export default function RainTypes() {
  const { toggleTrigger } = useContext(PlayerContext)
  const { goBack } = useNavigation()

  const closeAudio = () => {
    goBack()
    toggleTrigger()
  }

  useEffect(() => {
    setTestDeviceIDAsync('EMULATOR')
  }, [])

  return (
    <Container style={{ paddingTop: Constants.statusBarHeight + 20 }}>
      <Header>
        <TouchableOpacity onPress={closeAudio}>
          <Feather name="arrow-left" size={30} color="white" style={{ marginTop: 20 }} />
        </TouchableOpacity>
        <View style={{
          shadowOpacity: 0.7,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0
          },
          elevation: 10,
          borderBottomLeftRadius: 393,
          borderBottomRightRadius: 393,
          width: 241,
          height: 393,
        }}>
          <RainImage source={simpleRain} />
        </View>
        <Feather name="arrow-left" size={24} color="transparent" />
      </Header>
      <Content>
        <TitlePage>Simple Rain</TitlePage>
        <Clock />
        <Player />
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