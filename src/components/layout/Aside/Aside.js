import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { selectLists } from "redux/shipping/selectors"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { resetBoxes, setBoxes } from "redux/items/items-slice";
import { deleteList } from "redux/shipping/shipping-slice";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SubmitDialog } from "../SubmitDialog/SubmitDialog";

const AsideItem = ({listId, items, handleClick}) => {
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
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [deletedId, setDeletedId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const lists = useSelector(selectLists);
  const handleClick = boxes => {
    dispatch(setBoxes(boxes));
    if (!location.endsWith("/boxes")) {
      navigate("/box-content-planner/boxes");
    }
  }; 

  return (<>
  <SubmitDialog 
    isOpen = {dialogOpen} 
    handleClose= {() => {setDialogOpen(false)}}
    handleSubmit = {() => {dispatch(deleteList(deletedId)); dispatch(resetBoxes())}} 
    content = {{title: "Are you sure you would like to delete a list?", content: "Once you delete the list, you won't be able to recover it, and the system will generate the next box ID based on the last existing list.",}} />
  <SwipeableDrawer
    anchor="left"
    open={isOpen}
    onClose={toggle}
    onOpen={toggle}            
  >
    <Typography variant="subTitle" bgcolor="header" p={{xs: 1, sm: 2, md: 2}} sx={{borderBottom: "solid 1px", borderColor: "primary.main", minWidth: "16.7rem"}}>Shipping lists</Typography>
      {lists.length === 0 ? <Typography sx={{textAlign: "center", padding: 1}}>There's no lists yet</Typography> :
      <List sx = {{backgroundColor: "mainBg", minHeight: "calc(100% - 5.3rem)"}}>
          {lists.map(({id, items, boxes}) => (
          <ListItem key={id} sx = {{backgroundColor: "mainBg",}}>
            <AsideItem listId = {id} items = {items} handleClick = {() => {handleClick(boxes)}}/> 
            <ListItemButton sx={{maxWidth: "fit-content"}} onClick={() => { setDeletedId(id); setDialogOpen(true);}}>
              <CloseRoundedIcon />
            </ListItemButton> 
          </ListItem>))}
      </List>}
  </SwipeableDrawer>
  </>)
}
/*  */