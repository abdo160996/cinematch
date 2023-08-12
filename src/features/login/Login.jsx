import LoadingButton from "@mui/lab/LoadingButton";

import FastLoginIcon from "@mui/icons-material/ElectricBolt";
import { Box } from "@mui/system";
import { Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useLazyGetRequestTokenQuery } from "../../api/authApi";
import { loggedInSelector } from "../../redux/UserSlice";
import { Navigate } from "react-router-dom";

function Login() {
  const isLoggedIn = useSelector(loggedInSelector);

  const [getRequestToken, { data, isLoading, isSuccess: isRequestToken }] = useLazyGetRequestTokenQuery();

  const handleTMDBLogin = () => {
    getRequestToken();
  };

  if (isLoggedIn) {
   return <Navigate to={"/"} replace />
  }

  return (
    <Box component={"form"} padding={2} borderRadius={4} bgcolor={"custom.primary"} color={"White"} position={"relative"}>
      <Stack spacing={3} width={400} mx={"auto"}>
        <LoadingButton loadingPosition="start" disabled={isLoggedIn} loading={isLoading} onClick={handleTMDBLogin} startIcon={<FastLoginIcon />} variant="outlined">
          Login with TMDB account
        </LoadingButton>
        {isRequestToken && (
          <>
            <code style={{color:"GrayText"}}>
              Test Account <br /> username : test_acc_2023 <br /> password : 123456asd{" "}
            </code>
            <Button href={`https://www.themoviedb.org/authenticate/${data?.request_token}?redirect_to=/approved`} variant="contained">
              Approve login request
            </Button>
          </>
        )}

        
      </Stack>
    </Box>
  );
}

export default Login;
