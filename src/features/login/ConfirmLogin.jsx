import React from "react";
import Wrapper from "../../components/Wrapper";
import { useCreateSessionMutation } from "../../api/authApi";
import { useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import CheckIcon from "@mui/icons-material/Check";
import { Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
function ConfirmLogin() {
  const navigate = useNavigate();
  const requestToken = useSelector((state) => state.user.requestToken);

  const [getUserSession, { isLoading, isSuccess, isError }] = useCreateSessionMutation();

  const handleUserLogin = () => {
    getUserSession({ request_token: requestToken });
    navigate("/")
  };
  return (
    <Wrapper>
      <LoadingButton loadingPosition="start" disabled={isLoading} loading={isLoading} onClick={handleUserLogin} startIcon={<CheckIcon />} variant="outlined">
        confirm login
      </LoadingButton>
      {isError && (
        <Alert severity="warning">
          Request is denied! -
          <Link style={{ color: "blueviolet", fontWeight: "bold" }} to={"/login"}>
            Login{" "}
          </Link>
        </Alert>
      )}

      {isSuccess && (
        <Alert severity="success">
          logged in successfully! -{" "}
          <Link style={{ color: "blueviolet", fontWeight: "bold" }} to={state?.from || "/"}>
            Go Home{" "}
          </Link>
        </Alert>
      )}
    </Wrapper>
  );
}

export default ConfirmLogin;
