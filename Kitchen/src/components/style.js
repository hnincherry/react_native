import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Header = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin: 10px;
`;

export const RowContainer = styled.View`
    flex-direction: row;
    padding-left: 10px;
`;

export const Title = styled.Text`
  font-size: 21px;
  font-weight: 500;
  color: black;
  padding-left: 20px;
  
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: black;
  padding-left: 20px;
`

export const TextContent = styled.Text`
    text-align: justify;
    padding-left: 20px;
    padding-right: 10px;
    height: 100px;
`

export const Line = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: #e3e1e1;
    margin-left: 10px;
    margin-top: 10px;
`

export const Menu = styled.View`
    flex-direction: column;
    padding: 15px;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
  background-color: #ffc640;
  padding: 15px;
  //margin-left: 18px;
  margin-top: 15px;
  //margin-right: 18px;
  margin-bottom: 18px;
  width: ${props => props.width || 300}px;
  border-radius: 10px;
`

export const Item = styled.Text`
  font-size:18px;
  padding:10px;
  color: '#666464';
`

export const Input = styled.TextInput`

    padding-left: 14px;
    width: 100%;
    border-radius: 8px;
    height: ${props => props.height || 47}px;
    text-align: ${props => props.align || 'left'};
    background-color: #e1e2e3;
    textAlignVertical: ${props => props.vertical || 'top'};


`;