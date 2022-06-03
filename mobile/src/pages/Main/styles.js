import styled from 'styled-components/native';
import MapView, { Callout } from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Map = styled(MapView)`
  flex: 1
`;

export const UserLocationImage = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const UserPopUp = styled(Callout)`
  width: 260px;
`;

export const Username = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(16)}px;
`;

export const Biography = styled.Text`
  color: #666;
  margin-top: ${RFValue(5)}px;
`;

export const Techs = styled.Text`
  margin-top: ${RFValue(5)}px;
`;

export const FormWrapper = styled.View`
  position: absolute;
  top: ${RFValue(20)}px;
  right: ${RFValue(20)}px;
  left: ${RFValue(20)}px;
  flex-direction: row;
  z-index: 5;
`;

export const FormInput = styled.TextInput.attrs({
  placeholder: "Buscar devs por techs ...",
  placeholderTextColor: '#999',
  autoCapitalize: "words",
  autoCorrent: false,

  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 4,
    height: 4
  },

  elevation: 2

})`

  flex: 1;
  height: ${RFValue(50)}px;
  background-color: #fff;
  color: #333;
  border-radius: ${RFValue(25)}px;
  padding: 0 ${RFValue(25)}px;
  font-size: ${RFValue(16)}px;

`;

export const ButtonForm = styled.TouchableOpacity.attrs({
  
})`

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  background-color: #8E4DFF;
  border-radius: ${RFValue(25)}px;
  justify-content: center;
  align-items: center;
  margin-left: ${RFValue(15)}px;
`;