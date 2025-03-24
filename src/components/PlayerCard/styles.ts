import styled, { css, type DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;

    margin-bottom: 16px;
`;

export const Name = styled.Text`
    flex: 1;

    ${({ theme }: DefaultTheme) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }: DefaultTheme) => ({
	size: 24,
	color: theme.COLORS.GRAY_200,
}))`
    margin-left: 16px;
    margin-right: 4px;
`;
