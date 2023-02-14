// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { BoxList } from "components/BoxList/BoxList";
// import { unstable_useBlocker as useBlocker } from "react-router";

export const Boxes = () => {

    return (
        <>
            <BoxList/>
        </>)
}

/*  function ConfirmNavigation({ blocker}) {
    console.log(blocker);
   if (blocker.state === "blocked") {
    return (
      <>
        <Dialog
        open={true}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" bgcolor="header" color="mainBg">
          {"Warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you leave this page you'll lose your unsaved data.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => blocker.proceed?.()}>I don't care. Let's go away</Button>
          <Button onClick={() => blocker.reset?.()} autoFocus>
            Thanks, I'll save it.
          </Button>
        </DialogActions>
      </Dialog>


        {/* <p style={{ color: "red" }}>
          Blocked the last navigation to {blocker.location.pathname}
        </p>
        <button onClick={() => blocker.proceed?.()}>Let me through</button>
        <button onClick={() => blocker.reset?.()}>Keep me here</button> 
      </>
    );
  }

  if (blocker.state === "proceeding") {
    return (
      <p style={{ color: "orange" }}>Proceeding through blocked navigation</p>
    );
  }

  return <p style={{ color: "green" }}>Blocker is currently unblocked</p>;
} 

 {blocker ? <ConfirmNavigation blocker={blocker} /> : null}  */