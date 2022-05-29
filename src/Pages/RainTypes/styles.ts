import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #313841;
  padding: 0 5%;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const RainImage = styled.Image`
  width: 239px;
  height: 389px;
  border-bottom-left-radius: 389;
  border-bottom-right-radius: 389;
`

export const TitlePage = styled.Text`
  font-family: 'Questrial_400Regular';
  color: #FFF;
  font-size: 30px;
`

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  align-self: center;
  align-content: center;
`