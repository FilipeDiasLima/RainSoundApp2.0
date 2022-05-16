import styled from 'styled-components/native';
// import { TouchableOpacity } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #313841;
  padding: 50px 30px;
`

export const TitlePage = styled.Text`
  font-family: 'Questrial_400Regular';
  color: #FFF;
  font-size: 35px;
`

export const RainButton = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  background-color: #FFF;
  border-radius: 15px;
`

export const RainName = styled.Text`
  font-family: 'Questrial_400Regular';
  color: #313841;
  font-size: 22px;
  margin-left: 32px;
  `;

export const RainImage = styled.Image`
  max-width: 30%;
  max-height: 30%;
`
