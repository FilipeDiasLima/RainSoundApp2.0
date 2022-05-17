import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #313841;
  padding: 5% 8%;
`

export const Content = styled.View`
  flex: 0.8;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10% 0;
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
