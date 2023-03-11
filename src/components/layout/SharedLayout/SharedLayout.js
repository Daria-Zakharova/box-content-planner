import { Container, Stack } from "@mui/material"
import { Aside } from "components/layout/Aside/Aside"
import { Footer } from "components/layout/Footer/Footer"
import { Header } from "components/layout/header/Header/Header"
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