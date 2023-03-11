import { Autocomplete, Button, FormGroup, Popover, Stack, TextField } from "@mui/material"
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import { useState } from "react";
import { useSelector } from "react-redux";
import { products } from "data/productsList";
import { selectBoxCapacity } from "redux/items/selectors";


export const FormSettings = ({handleSubmit}) => {
    const boxCapacity = useSelector(selectBoxCapacity);
    const [settings, setSettings] = useState({extraItem: "wicked witch", boxCapacity});
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);

    const submit = () => {
        setSettingsOpen(false); 
        handleSubmit(settings)
    }

    return (
        <>
        <Button type="button" onClick={(e) => {setSettingsAnchorEl(e.currentTarget); setSettingsOpen(!settingsOpen)}} sx={{ marginBottom: "3rem", padding: "0.5rem", minWidth:"fit-content"}}><SettingsSuggestRoundedIcon/></Button>
        <Popover open={settingsOpen} onClose={submit} anchorEl={settingsAnchorEl} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
            <FormGroup sx={{padding: "1rem"}}>
                <Stack direction="row" spacing={{xs: 1, sm: 1, md: 2}}>
                <Autocomplete
                options={products}
                freeSolo
                value = {settings.extraItem}
                onChange = {(_, newValue) => {setSettings({...settings, extraItem: newValue})}}
                onInputChange =  {(_, newValue) => {setSettings({...settings, extraItem: newValue})}}
                renderInput={(params) => <TextField {...params} label = "Extra item" name = "name"/>}
                size="small"
                sx={{width: "10rem", flexGrow: 1, backgroundColor: "paper"}}/>

                <TextField
                label="Box size"
                type="number"
                InputProps={{inputProps: { min: 0 }}}
                value={settings.boxCapacity}
                name = "amount"
                onChange= {e => {setSettings({...settings, boxCapacity: e.target.value})}}
                size="small"
                sx={{width: "5rem", backgroundColor: "paper"}}/>
                <Button type="button" onClick={submit} sx={{padding: "0.5rem",minWidth:"fit-content"}}><CheckCircleOutlineRoundedIcon/></Button>
                </Stack>
            </FormGroup>
        </Popover>
        </>
    )
}