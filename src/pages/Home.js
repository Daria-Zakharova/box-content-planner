import { Box, Button, Modal, Zoom } from "@mui/material";
import { AddProductForm } from "components/Form/addProductsForm";
import { useState } from "react";

// Jumping box let's have some fun and make some boxes!
export const Home = () => {
    const [formIsOpened, setFormIsOpened] = useState(false);

const toggleForm = () => {
  setFormIsOpened(!formIsOpened);
}
  return (
    <>
        {!formIsOpened && <Button type="button" onClick={toggleForm} variant="contained" sx={{display: "block", margin: "64px auto"}}>I want to make a great list of boxes!</Button>}
        
        <Modal open={formIsOpened} keepMounted sx={{overflow: "auto"}}> 
            <Zoom in={formIsOpened}>       
                <Box p = {{xs: 1, sm: 2, md: 3}} sx={{backgroundColor: "mainBg", maxWidth:"95%", width: "500px", minHeight: "300px",margin: "200px auto auto", paddingBottom: "5rem", position: "relative"}}>
                    <AddProductForm handleClose={toggleForm}/>
                </Box>
            </Zoom>
        </Modal>
        
    </>);
}