import styled, { css, type DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;

    ${({ theme }: DefaultTheme) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_300};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;
