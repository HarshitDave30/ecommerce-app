import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CartModal({ setOpen, cart, activeid, open }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {cart.filter((x) => x === activeid).length > 1 ? (
        <Snackbar
          severity="error"
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Item Added To Cart"
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Item already Added To Cart!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          severity="success"
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Item Added To Cart"
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Item Added!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
