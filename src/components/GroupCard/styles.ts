import { TouchableOpacity } from "react-native";
import styled, { css, type DefaultTheme } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;


    background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    ${({ theme }: DefaultTheme) => css`
        font-size: ${theme.FONT_SIZE.MD}px;        
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }: DefaultTheme) => ({
	size: 32,
	color: theme.COLORS.GREEN_700,
	weight: "fill", //Muda o icone para preenchido
}))`
    margin-right: 20px;
`;
