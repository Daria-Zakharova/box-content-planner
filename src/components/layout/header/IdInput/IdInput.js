import { selectBoxId, selectLists } from "redux/shipping/selectors";
import { Stack, Button, TextField, Popover } from "@mui/material"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import { useDispatch, useSelector } from "react-redux"
import { resetShippingState, setCurrentBoxId } from "redux/shipping/shipping-slice";
import { useCallback, useEffect, useState } from "react";
import { getCurrentId } from "utils/getCurrentId";
import { incrBoxId } from "utils/incrBoxId";
import { SubmitDialog } from "../../SubmitDialog/SubmitDialog";

export const IdInput = () => {
    const dispatch = useDispatch();
    const shippingLists = useSelector(selectLists);
    const presetId = useSelector(selectBoxId);    
    const [id, setId] = useState(presetId);
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);

    const reset = useCallback(() => {
        dispatch(setCurrentBoxId(presetId.replace(/(\d+)$/g, "1")))}, [dispatch, presetId]);

    useEffect(() => {
        if (!shippingLists.length) {
            reset();
            setId(presetId);
        } 
        else {
            setId(incrBoxId( getCurrentId(shippingLists)));
        }
    }, [shippingLists, presetId, dispatch, reset]);

    return (
    <>
    <SubmitDialog 
    isOpen = {dialogOpen} 
    handleClose= {() => {setDialogOpen(false)}}
    handleSubmit = {() => {dispatch(resetShippingState())}} 
    content = {{title: "Are you sure you would like to reset all data?", content: "You will not be able to restore deleted data after reset. Make sure you don't need it anymore."}} />
    <Stack direction="row" sx={{overflow: "hidden"}}>      
        
        <Popover open={open} onClose={()=>{setOpen(!open)}} anchorEl={settingsAnchorEl} 
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}>
            <Stack 
            direction="row" 
            spacing={1}
            p={1} 
            component="form" 
            onSubmit={e => {e.preventDefault(); dispatch(setCurrentBoxId(id));}}>
                <TextField 
                variant="standard"
                    label="New box ID will be" 
                value={id} 
                onChange = {e => setId(e.target.value)}/>
                <Button type ="submit" sx={{padding: "0.5rem", minWidth:"fit-content"}}>
                <CheckCircleOutlineRoundedIcon/>
                </Button>
                <Button 
                type="button"
                variant="outlined" 
                sx={{padding: "0.5rem", minWidth:"fit-content"}}
                onClick = {() => {setDialogOpen(true)}}>
                    Reset Id and Lists
                </Button>
            </Stack>
        </Popover>
        <Button 
        type="button" 
        sx={{ margin: "0 0 1rem 2rem", padding: "0.5rem", minWidth:"fit-content"}}
        onClick={(e) => {setSettingsAnchorEl(e.currentTarget); setOpen(!open)}} >
            <SettingsSuggestRoundedIcon sx={{marginRight: 1}} /> Set box shipping ID
        </Button>        
    </Stack>
    </>);
}