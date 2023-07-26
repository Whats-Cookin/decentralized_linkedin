import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./loading/index";
import Snackbar from "./snackBar/index";
import Login from "./Login/index";
import "./App.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Profile from "./profile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import img1 from "./image/linkedtrust 1.svg";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [isSnackbarOpen, toggleSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const commonProps = {
    toggleSnackbar,
    setSnackbarMessage,
    setLoading,
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#009688",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#eeeeee",
            minHeight: "100vh",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "calc(3px + 2vmin)",
            color: "rgb(37, 3, 3)",
            overflow: "hidden",
            justifyContent: "center",
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "40%",
              height: "100%",
              backgroundColor: "#849EA6",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              left: "5%",
              width: "30%",
              height: "100%",
              backgroundColor: "#849EA6",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                padding: "10px",
              }}
            >
              <img
                src={img1}
                alt="LinkedTrust"
                style={{
                  height: "30px",
                  width: "auto",
                }}
              />
            </div>
            <div
              style={{
                color: "white",
                paddingTop: "30px",
              }}
            >
              <img
                src="/image2/quote-custom.svg"
                alt=""
                style={{
                  height: "30px",
                  width: "auto",
                  verticalAlign: "30px",
                }}
              />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ullam tenetur dolores odio praesentium maxime ipsam animi
              voluptatem ex, voluptate, fugiat omnis odit delectus facilis
              dolorem nam perferendis quibusdam voluptas minus laudantium
              necessitatibus libero!
              <CheckCircleIcon
                sx={{ color: "green", marginLeft: "5px", fontSize: 10 }}
              />
            </div>
          </div>

          <Snackbar
            snackbarMessage={snackbarMessage}
            isSnackbarOpen={isSnackbarOpen}
            toggleSnackbar={toggleSnackbar}
          />
          <Loader open={loading} />
          <Routes>
            <Route path="/" element={<Profile {...commonProps} />} />
            <Route path="login" element={<Login {...commonProps} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
