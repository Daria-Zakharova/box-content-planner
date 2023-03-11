import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Nav = styled("nav")(({theme: {palette: {primary}}}) => ({
    paddingBottom: 8,
    borderBottom: `solid 1px ${primary.main}`,
}));

export const NavItem = styled(NavLink)(({theme : {palette}}) => ({
    color: palette.primary.main,
    textDecoration: 'none',

    "&:hover, &.active:hover" : {
        color: palette.font.accent,
    },

    "&.active" : {
        color: palette.primary.dark,
        textDecoration: 'underline',
        letterSpacing: 2,
    }
}))
