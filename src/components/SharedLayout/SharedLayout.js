import { Container, Stack } from "@mui/material"
import { Aside } from "components/Aside/Aside"
import { Footer } from "components/Footer/Footer"
import { Header } from "components/Header/Header"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
    const [asideOpen, setAsideOpen] = useState(false);
    return (
    <Stack sx={{minHeight: "100vh"}}>
        <Header onClickMenu = {() => setAsideOpen(!asideOpen)}/>
        <Container fixed sx = {{flexGrow: 1}}>
            <Aside isOpen={asideOpen} toggle = {() => setAsideOpen(!asideOpen)}/>
            <Outlet/>
        </Container>
        <Footer/>
    </Stack>)
}