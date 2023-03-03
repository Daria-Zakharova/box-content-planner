import { Box, Button, capitalize, Card, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { useDispatch, useSelector } from "react-redux";
import { resetProducts} from "redux/items/items-slice";
import { selectBoxId, selectLists } from "redux/shipping/selectors";
import { selectBoxCapacity, selectBoxes, selectProducts} from "redux/items/selectors";
import { addList, setCurrentBoxId } from "redux/shipping/shipping-slice";
import { BoxesPlanner } from "utils/boxPlanner";
import { incrBoxId } from "utils/incrBoxId";
import { getCurrentId } from "utils/getCurrentId";

export const BoxList = () => {
    const dispatch = useDispatch();
    const presetBoxId = useSelector(selectBoxId);

    const items = useSelector(selectProducts);
    const boxCapacity = useSelector(selectBoxCapacity);
    const boxes = useSelector(selectBoxes);

    if(!boxes.length){
        boxes.push(...new BoxesPlanner(items, boxCapacity));
        
    }
    let currentBoxId = getCurrentId(useSelector(selectLists)) || presetBoxId;

    const list = {
        id: Date.now(),
        items,
        boxes: boxes.map(box => {
            const id = currentBoxId;
            currentBoxId = incrBoxId(currentBoxId);            
            return {id, ...box};
        })
    }
    return (
        <>
            {boxes.length > 0 && 
            <>
            <Grid container spacing={4} sx={{paddingTop: 8, paddingBottom: 2}}>
            {boxes.map((box, idx) => {
                return (
                    <Grid xs={12} sm={6} md = {3} key = {idx}>
                        <Card sx={{backgroundColor: "paper", height: "100%"}}>
                            <Typography variant="subTitle" component="div" sx={{textAlign: "center", padding: 2, backgroundColor: "#fffe"}}> {box.id ? box.id : `Box №${idx + 1}`}</Typography>                            
                            <List component="ul">
                                {box.content.map(({name, amount}, idx) => (
                                <ListItem key = {idx} component="li">                                        
                                    <Stack direction="row" sx={{minWidth: "100%"}}>
                                        <ListItemText sx={{maxWidth: "fit-content"}}>
                                            {idx + 1}. {capitalize(name)}
                                        </ListItemText>
                                        <Box sx={{flexGrow: 1, borderBottom: "1px dotted black", margin: "0 8px 10px"}}/>
                                        <ListItemText sx={{maxWidth: "fit-content"}}>
                                            {amount}
                                        </ListItemText>
                                    </Stack>                                        
                                </ListItem>))}
                            </List>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        <Button variant="contained" type="button" onClick={() => {
            dispatch(addList(list)); 
            dispatch(resetProducts())
            dispatch(setCurrentBoxId(currentBoxId));}} sx={{display: "block", margin: "1rem auto 3rem"}}>Save list</Button>
            </>}
        </>
    )
}