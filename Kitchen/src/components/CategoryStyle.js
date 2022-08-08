import styled from "styled-components/native";

export const RowContainer = styled.View`
    flex: 1;
    flex-direction: row;
`

export const Category = styled.View`
    border: 1px;
    border-radius: 12px;
    width: 90px;
    height: 85px;
    margin-left: 15px;
    margin-right: 10px;
    margin-top: 10px;
    padding-left: 15px;
    padding-top: 10px;
`
export const Image = styled.Image`
    width: 60px;
    height: 60px;
    

`
export const Text = styled.Text`
    font-size: 17px;
    color: black;
`

export const CategoryItem = styled.TouchableOpacity`
    padding: 10px;
    font-size: 18px;
    color: black;
    
`