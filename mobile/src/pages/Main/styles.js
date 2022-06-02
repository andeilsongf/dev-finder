import styled from 'styled-components/native';
import { Callout } from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
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