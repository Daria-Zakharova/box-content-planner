import { HomeRounded, ListRounded, WidgetsRounded } from "@mui/icons-material";
import { Button, Stack, styled} from "@mui/material";
import { NavLink } from "react-router-dom";

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


export const Navigation = ({onClickMenu}) => {
    return(
        <Stack direction="row" component="nav" alignItems="center">
            <Button type="button" onClick={onClickMenu}><ListRounded/></Button>
            <NavItem to="/box-content-planner/" style={{margin: "0 32px"}}><HomeRounded style={{marginBottom: "-4px"}}/> Home</NavItem>
            <NavItem to="/box-content-planner/boxes"><WidgetsRounded style={{marginBottom: "-4px"}}/> Boxes</NavItem> 
        </Stack>
    );
}
