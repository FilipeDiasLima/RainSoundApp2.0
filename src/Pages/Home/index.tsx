import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Container, RainButton, TitlePage, RainName, RainImage, Content } from './styles'

import simpleRain from '../../assets/simple-rain.png'
import { ScreenNameNavigation } from '../../types/navigation';

export default function Home() {
  const { navigate } = useNavigation<NativeStackNavigationProp<ScreenNameNavigation>>();

  function handleChooseRainType(rainIndex: number) {
    navigate('RainTypes' as never, { rainIndex } as never);
  }

  return (
    <Container>
      <TitlePage>RainSound</TitlePage>
      <Content>
        <RainButton onPress={() => handleChooseRainType(0)}>
          <RainImage source={simpleRain} />
          <RainName>Chuva simples</RainName>
          <Feather name="chevron-right" size={24} color="#313841" />
        </RainButton>
      </Content>
    </Container>
  )
}