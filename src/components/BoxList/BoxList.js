import { Box, Button, capitalize, Card, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { useDispatch, useSelector } from "react-redux";
import { addProducts, resetProducts } from "redux/items/items-slice";
import { selectProducts } from "redux/items/selectors";
import { addList } from "redux/shipping/shipping-slice";
import { boxesPlanner } from "utils/boxPlanner";
import { addToArrOrUpdAmount } from "utils/checkByName";

export const BoxList = () => {
    const dispatch = useDispatch();

    const items = useSelector(selectProducts);
    if (!items.length) {
        return;
    }

    const {boxes, extraItem} = new boxesPlanner(items);
    extraItem && dispatch(addProducts(addToArrOrUpdAmount([...items], extraItem)));

    const list = {
        id: Date.now(),
        items,
    }
    return (
        <>
            { items && 
            <>
                <Grid container spacing={4} sx={{paddingTop: 8, paddingBottom: 2}}>
            {boxes.map((box, idx) => {
                return (
                    <Grid xs={12} sm={6} md = {3} key = {idx}>
                        <Card sx={{backgroundColor: "paper", height: "100%"}}>
                            <Typography variant="subTitle" component="div" sx={{textAlign: "center", padding: 2, backgroundColor: "#fffe"}}> Box №{idx + 1}</Typography>                            
                            <List component="ul">
                                {box.content.map(({name, amount}, idx) => (
                                <ListItem key = {idx} component="li">                                        
                                        <Stack direction="row" sx={{minWidth: "100%"}}><ListItemText sx={{maxWidth: "fit-content"}}>{idx + 1}. {capitalize(name)}</ListItemText><Box sx={{flexGrow: 1, borderBottom: "1px dotted black", margin: "0 8px 10px"}}/><ListItemText sx={{maxWidth: "fit-content"}}>{amount}</ListItemText></Stack>                                        
                                </ListItem>))}
                            </List>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        <Button variant="contained" type="button" onClick={() => {
            dispatch(addList(list)); 
            dispatch(resetProducts());}} sx={{display: "block", margin: "1rem auto 3rem"}}>Save list</Button>
            </>}
        </>
    )
}