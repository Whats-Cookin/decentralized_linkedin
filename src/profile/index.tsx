import IProfileProps from "./types";
import UploadFiles from "../UploadFiles/UploadFiles";
import { Box } from "@mui/material";

const Profile = ({ toggleSnackbar, setSnackbarMessage }: IProfileProps) => {
  return (
    <Box sx={{ display: "flex",justifyContent: "flex-end",width:'100%',backgroundColor:'#849EA6' }}>
      <UploadFiles />
    </Box>
  );
};

export default Profile;
