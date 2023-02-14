import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { selectLists } from "redux/shipping/selectors"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AsideItem = ({listId, items}) => {
    const date = new Date(listId);
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon ml="1rem"/>}
        >
          <Typography sx={{backgroundColor: "paper"}}>{date.toLocaleString()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {items.map(({name, amount}) => <ListItem key={name}><ListItemText>{name}</ListItemText><ListItemText sx={{textAlign: "right"}}>{amount}</ListItemText></ListItem>)}
          </List>
        </AccordionDetails>
      </Accordion>
    )
}

export const Aside = ({isOpen, toggle}) => {
    const lists = useSelector(selectLists);
    console.log(lists); 
    return (<SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={toggle}
            onOpen={toggle}
            
          >
            <Typography variant="subTitle" bgcolor="header" p={{xs: 1, sm: 2, md: 2}} sx={{borderBottom: "solid 1px", borderColor: "primary.main"}}>Shipping lists</Typography>
            <List sx = {{backgroundColor: "mainBg", minHeight: "100%"}}>
                {lists.map(({id, items}) => <ListItem key={id} sx = {{backgroundColor: "mainBg",}}><AsideItem listId = {id} items = {items}/> <ListItemButton><CloseRoundedIcon /></ListItemButton> </ListItem>)}
            </List>
          </SwipeableDrawer>)
}
