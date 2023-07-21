import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import React from "react";

const UploadFiles = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        width: "64.58%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "205px",
          m: "175px auto 55px 64px",
          padding: "15px 16px 10px 41px",
          border: "1px solid #0A0A0A33",
          borderRadius: "5px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "29.05px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Achievements
          </Typography>
          <Button
            onClick={handleClickOpen}
            sx={{
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "26.63px",
              color: "#432335",
              "&:hover": { backgroundColor: "white" },
              fontFamily: "Inter, sans-serif",
            }}
          >
            +IMPORT
          </Button>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Import File"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Improt your Achievements file from your PC
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={handleClose}>Import</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Divider style={{ height: 1, width: "100%", color: "#00000033" }} />{" "}
        <Box
          sx={{
            width: "70%",
            height: "48px",
            mt: "45px",
            border: "1px solid #0A0A0A33",
            borderRadius: "5px",
            alignItems: "left",
            display: "flex",
            ml: "10px",
          }}
        >
          {" "}
          <Button onClick={handleClickOpen}>
            <ControlPointIcon sx={{ color: "#757575", fontWeight: "500" }} />
          </Button>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "19.36pxpx",
              width: "247px",
              color: "#707070",
              m: "auto 0",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Add your Achievements
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          height: "221px",
          m: "0 auto 55px 64px",
          border: "1px solid #0A0A0A33",
          borderRadius: "5px",
          padding: "15px 16px 15px 41px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              lineHeight: "29.05px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Recommendations
          </Typography>
          <Button
            onClick={handleClickOpen}
            sx={{
              fontSize: "22px",
              fontWeight: "500",
              lineHeight: "26.63px",
              color: "#432335",
              "&:hover": { backgroundColor: "white" },
              fontFamily: "Inter, sans-serif",
            }}
          >
            +IMPORT
          </Button>
        </Box>
        <Divider
          style={{
            height: 1,
            width: "100%",
            color: "#00000033",
            marginBottom: "25px",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "19.36px",
            color: "#707070",
            ml: "7px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Request a recommendation
        </Typography>
        <Box sx={{ display: "flex", ml: "7px" }}>
          <TextField
            label="Email"
            sx={{
              width: "50%",
              padding: "14px 126px 13 px 13px",
              mt: "10px",
              height: "48px",
            }}
          />
          <Button
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "500",
              backgroundColor: "#009688",
              width: "122px",
              height: "55px",
              border: "1px solid #0A0A0A33",
              borderRadius: "5px",
              m: " auto 14px",
              mt: "10px",
              "&:hover": { backgroundColor: "#00695F" },
              fontFamily: "Inter, sans-serif",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadFiles;
