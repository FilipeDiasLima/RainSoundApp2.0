import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #313841;
  padding: 0 5%;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`

export const Content = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 20%;
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

export const Options = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1% 5%;
  border-radius: 15px;
`

export const Option = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2% 2% 0 2%;
`

export const OptionName = styled.Text`
  font-family: 'Questrial_400Regular';
  color: #313841;
  font-size: 20px;
`

export const SwitchButton = styled.Switch`

`

export const Divisor = styled.View`
  width: 100%;
  border-bottom-color: #E1E1E1;
  border-bottom-width: 2px;
`
