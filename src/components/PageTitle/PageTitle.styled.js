import { styled } from "@mui/material";

export const Title = styled('h1')(({theme: {palette}}) => ({
    padding: '2rem 0',
    color: 'transparent',
    backgroundColor: palette.primary.dark,
    backgroundImage: `linear-gradient(to top, ${palette.font.accent} 30%, ${palette.primary.light})`,
    backgroundClip: 'text',
}))