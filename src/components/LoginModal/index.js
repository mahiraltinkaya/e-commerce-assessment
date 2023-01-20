import React from "react";

import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button,
} from "@components";

import { dispatch } from "@store";
import { login } from "@store/slices/userSlice";
import UserService from "services/User.service";

import UserForm from "./UserForm";

const LoginModal = ({ open = true, handleClose }) => {
  const [success, setSuccess] = React.useState(null);
  const [type, setType] = React.useState(false);

  const onSubmit = (val) => {
    if (type) {
      UserService.register(val)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setType(false);
    } else {
      UserService.login(val)
        .then((res) => {
          dispatch(login({ token: res.data.token, user: val }));
          handleClose(false);
        })
        .catch((err) => {
          setSuccess(false);
        });
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose(false);
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "default.primary",
      }}
    >
      <Card sx={{ width: 340, borderRadius: 6 }}>
        <CardContent sx={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="" height={50} />
          <Typography variant={"h6"}>{!type ? "Login" : "Register"}</Typography>
        </CardContent>
        <Divider></Divider>
        <CardContent>
          <UserForm
            onSubmit={onSubmit}
            type={type}
            success={success}
          ></UserForm>
        </CardContent>
        <CardActions></CardActions>
        <Divider></Divider>
        {!type && (
          <>
            <CardContent>
              <Button
                onClick={() => {
                  setType(true);
                }}
                fullWidth
                size={"small"}
              >
                <Typography
                  variant="caption"
                  sx={{ fontSize: 10, fontWeight: "bold" }}
                >
                  Don't have an account?
                </Typography>
              </Button>
            </CardContent>
          </>
        )}
        {type && (
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              sx={{ fontSize: 10, fontWeight: "bold" }}
            >
              Privacy Police - Delivery Policy
            </Typography>
          </CardContent>
        )}
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="caption"
            sx={{ fontSize: 10, fontWeight: "bold" }}
          >
            This site uses essential cookies. See our Cookie Notice for more
            information.
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default LoginModal;
