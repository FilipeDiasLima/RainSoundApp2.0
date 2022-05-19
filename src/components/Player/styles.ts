import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  width: 230px;
  max-height: 55px;
  background-color: #FFF;
  align-items: center;
  border-radius: 200px;
  margin-top: 50px;
`

export const PlayButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  width: 70px;
  height: 70px;
`

export const AudioButton = styled(TouchableOpacity)``

export const SettingButton = styled(TouchableOpacity)``