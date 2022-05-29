import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #313841;
  padding: 5% 8% 0 8%;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20% 0;
`

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  align-self: center;
  align-content: center;
`

export const TitlePage = styled.Text`
  font-family: 'Questrial_400Regular';
  color: #FFF;
  font-size: 35px;
`

export const RainButton = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  border-radius: 15px;
  padding: 3%;
`

export const RainName = styled.Text`
  font-family: 'Questrial_400Regular';
  color: #313841;
  font-size: 20px;
`;

export const RainImage = styled.Image`
  width: 127px;
  height: 80px;
  border-radius: 15px;
`
