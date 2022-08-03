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

export const Line = styled.View`
    borderBottomColor: grey;
    borderBottomWidth: 1px;
    margin-left: 10px;
    margin-top: 10px;
`

export const Menu = styled.View`
    flex-direction: column;
    padding: 15px;
    align-items: center;
`