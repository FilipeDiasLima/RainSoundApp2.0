import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Container, Header, RainImage, Content, TitlePage } from './styles'

import simpleRain from '../../assets/simple-rain.png'
import Clock from '../../components/Clock';
import Player from '../../components/Player';

export default function RainTypes() {
  const { goBack } = useNavigation()

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => goBack()}>
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
    </Container>
  )
}