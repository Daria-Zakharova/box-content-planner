import { HomeRounded, ListRounded, WidgetsRounded } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Nav, NavItem } from "./Navigation.styled";

export const Navigation = ({onClickMenu}) => {
    return(
        <Stack direction="row" alignItems="baseline" component={Nav}>
            <Button type="button" onClick={onClickMenu}><ListRounded/></Button>
            <NavItem to="/box-content-planner/" style={{margin: "0 32px"}}><HomeRounded style={{marginBottom: "-4px"}}/> Home</NavItem>
            <NavItem to="/box-content-planner/boxes"><WidgetsRounded style={{marginBottom: "-4px"}}/> Boxes</NavItem> 
        </Stack>
    );
}
