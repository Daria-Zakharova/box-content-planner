import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const SubmitDialog = ({isOpen, handleClose, handleSubmit, content: {title, content}}) => {

  return (
      <Dialog
        open={isOpen}
        onClose={handleClose}>
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
          <Button onClick={() => {handleSubmit(); handleClose();}} autoFocus>
            OK
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
  );
}