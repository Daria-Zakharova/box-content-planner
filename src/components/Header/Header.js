import { Box, Container} from "@mui/material"
import { Navigation } from "components/Navigation/Navigation"
import { PageTitle } from "components/PageTitle/PageTitle"

export const Header = ({onClickMenu}) => {
    return (
    <Box sx={{backgroundColor: "header", minHeight: "100px", padding: "1rem 0", borderBottom: "solid 1px", borderColor: "primary.main"}}> 
        <Container>
        <Navigation onClickMenu = {onClickMenu}/>
        <PageTitle/>
        </Container>
    </Box>)
}