import { Box, Container, Stack} from "@mui/material"
import { Navigation } from "components/layout/header/Navigation/Navigation"
import { PageTitle } from "components/layout/header/PageTitle/PageTitle"
import { IdInput } from "../IdInput/IdInput"

export const Header = ({onClickMenu}) => {
    return (
    <Box sx={{backgroundColor: "header", minHeight: "100px", padding: "1rem 0", borderBottom: "solid 1px", borderColor: "primary.main"}}> 
        <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline"  sx = {{paddingBottom: 1, borderBottom: "solid 1px", borderColor: "primary.main"}}>
            <Navigation onClickMenu = {onClickMenu}/>
            <IdInput/>
        </Stack>
        <PageTitle/>
        </Container>
    </Box>)
}

/* export const Nav = styled("nav")(({theme: {palette: {primary}}}) => ({
    paddingBottom: 8,
    borderBottom: `solid 1px ${primary.main}`,
})); */