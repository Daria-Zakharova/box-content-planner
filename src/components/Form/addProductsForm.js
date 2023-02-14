import { Autocomplete, Box, Button, FormGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProducts } from "redux/items/items-slice";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { products } from "data/productsList";
import { Navigate } from "react-router-dom";

export const AddProductForm = ({handleClose}) => {
    const dispatch = useDispatch();
    const [inputFields, setInputFields] = useState([{name: "", amount: 1}]);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = ({newValue, idx, dataType}) => {
        const newInputFields = [...inputFields];
        newInputFields[idx][dataType] = dataType === "name" ? newValue : +newValue;
        setInputFields(newInputFields);
    }

    const handleInputAdd = () => {
        const input = {name: "", amount: 1};
        setInputFields([...inputFields, input]);
    }

    const handleDelete = (idx) => {
        const newInputFields = [...inputFields];
        newInputFields.splice(idx, 1);
        setInputFields(newInputFields);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProducts(inputFields));
        setSubmitted(true); 
    };

    return (
            <> {submitted ? <Navigate to="/box-content-planner/boxes"/> : (<Box component="form" onSubmit={handleSubmit}>
                <Stack direction="row" justifyContent="space-between" sx={{marginBottom: "32px"}} flexWrap>
                    <Typography variant="subTitle" sx={{margin: "0 auto"}}>The list of shipped items</Typography>
                    <Button onClick={handleClose}><CloseRoundedIcon/></Button>
                </Stack>
            <FormGroup>
                {inputFields.map((inputField, idx, arr) => {
                return (
                <Stack key={idx} direction="row" spacing={{xs: 1, sm: 1, md: 2}} sx={{ position: "relative", marginBottom: "20px"}} pr={arr.length === 1 ? "calc(80px + 1rem)" : "calc(40px + .5rem)"}>
                    <Autocomplete
                        options={products}
                        freeSolo
                        value = {inputField.name}
                        onChange = {(_, newValue) => {handleChange({newValue, idx, dataType: "name"})}}
                        onInputChange =  {(_, newValue) => {handleChange({newValue, idx, dataType: "name"})}}
                        renderInput={(params) => <TextField {...params} label = "Product name" name = "name"/>}
                        size="small"
                        sx={{width: "10rem", flexGrow: 1, backgroundColor: "paper"}}/>

                    <TextField
                        label="Amount"
                        type="number"
                        value={inputField.amount}
                        name = "amount"
                        onChange= {e => {handleChange({newValue: e.target.value, idx, dataType: "amount"})}}
                        size="small"
                        sx={{width: "4rem", backgroundColor: "paper"}}/>

                    {arr.length !== 1 && <Button type="button" onClick={() => {handleDelete(idx)}} variant="contained" color="secondary" sx={{padding: "0.5rem",minWidth:"fit-content"}}><CloseRoundedIcon/></Button>}
                    {idx === (arr.length - 1) && <Button type="button" onClick={handleInputAdd} variant="contained" sx={{position: "absolute", right: 0, top: 0, bottom: 0, padding: "0.5rem", minWidth:"fit-content"}}> <AddCircleIcon/></Button> }
                </Stack>)
            })}
            </FormGroup>
            <Button type="submit" variant="contained" sx={{position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)"}}> <CheckCircleOutlineRoundedIcon/> Submit</Button>
        </Box>)
            }
            </> 
    );
}
