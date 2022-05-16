import { Text } from 'react-native'
import { Container, RainButton, TitlePage, RainName, RainImage } from './styles';
import { RectButtonProps, RectButtonProperties } from 'react-native-gesture-handler';

import simpleRain from '../../assets/simple-rain.jpg'

export default function Procedimentos({ ...rest }: RectButtonProperties) {

  function openMenu(value: string) {
    console.log(value)
  }

  return (
    <Container>
      <TitlePage>RainSound</TitlePage>
      <RainButton onPress={() => openMenu('PROCEDIMENTOS')} {...rest}>
        <RainImage source={simpleRain} />
        <RainName>Dar aulas</RainName>
      </RainButton>
    </Container>
  )
}