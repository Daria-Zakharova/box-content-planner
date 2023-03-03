import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { selectLists } from "redux/shipping/selectors"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { resetBoxes, setBoxes } from "redux/items/items-slice";
import { deleteList } from "redux/shipping/shipping-slice";

const AsideItem = ({listId, items, handleClick}) => {
    // const dispatch = useDispatch();
    const date = new Date(listId);
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon ml="1rem"/>}
        >
          <Typography sx={{backgroundColor: "paper", cursor: "pointer"}}>{date.toLocaleString()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List onClick = {handleClick}>
            {items.map(({name, amount}) => <ListItem key={name}><ListItemText>{name}</ListItemText><ListItemText sx={{textAlign: "right"}}>{amount}</ListItemText></ListItem>)}
          </List>
        </AccordionDetails>
      </Accordion>
    )
}

export const Aside = ({isOpen, toggle}) => {
  const dispatch = useDispatch();
    const lists = useSelector(selectLists);
    const handleClick = boxes => {console.log("boxes is", boxes); dispatch(setBoxes(boxes))}; 
    console.log(lists); 
    return (<SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={toggle}
            onOpen={toggle}            
          >
            <Typography variant="subTitle" bgcolor="header" p={{xs: 1, sm: 2, md: 2}} sx={{borderBottom: "solid 1px", borderColor: "primary.main"}}>Shipping lists</Typography>
            {lists.length > 0 ? <List sx = {{backgroundColor: "mainBg", minHeight: "100%"}}>
                {lists.map(({id, items, boxes}) => (
                <ListItem key={id} sx = {{backgroundColor: "mainBg",}}>
                  <AsideItem listId = {id} items = {items} handleClick = {() => {handleClick(boxes)}}/> 
                  <ListItemButton onClick={() => {dispatch(deleteList(id)); dispatch(resetBoxes())}}>
                    <CloseRoundedIcon />
                  </ListItemButton> 
                </ListItem>))}
            </List> : <Typography>There's no lists yet</Typography>}
          </SwipeableDrawer>)
}
