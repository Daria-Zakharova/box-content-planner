import { Box, Container, Link, Typography } from "@mui/material";

export const Footer = () => (
    <Box component="footer" sx={{maxHeight: "4.5rem", padding: "1.5rem 0", textAlign: "center", backgroundColor: "header", borderTop: "1px solid", borderColor: "primary.main"}}>
        <Container>
            <Typography component="div">
                made by <Link href="https://www.linkedin.com/in/daria-zakharova-acc/" underline="hover">Daria Zakharova</Link>
                <Link href="https://github.com/Daria-Zakharova/React-box-content-planner" underline="hover" sx={{marginLeft: "1rem", paddingLeft: "1rem", borderLeft: "1px solid", borderColor: "primary"}}>Github repository</Link>
            </Typography>
        </Container>
    </Box>
)