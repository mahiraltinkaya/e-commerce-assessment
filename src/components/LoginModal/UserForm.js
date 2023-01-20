import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  TextField,
  Button,
  Iconify,
  InputAdornment,
  Alert,
} from "@components";
import { useForm, Controller } from "react-hook-form";

const UserForm = ({ onSubmit, success = null, type = false }) => {
  const shipmentResolver = yup
    .object()
    .shape({
      username: yup.string().required("Username field required"),
      password: yup
        .string()
        .required("Password field required")
        .min(6, "Password must be minimum 6 characters"),
    })
    .required();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(shipmentResolver),
    defaultValues: {
      username: "mor_2314",
      password: "83r5^_",
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={3}
          sx={{
            borderRadius: 4,
            px: 0,
          }}
        >
          <Grid item xs={12}>
            {success && <Alert severity="success">Login Successful</Alert>}
            {success === false && (
              <Alert severity="error">Username or password incorrect!</Alert>
            )}
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="username"
              control={control}
              defaultValue={""}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                  size={"small"}
                  placeholder="Username"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Iconify
                          icon={"mdi:user-circle-outline"}
                          size={22}
                        ></Iconify>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue={""}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  type={"password"}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                  size={"small"}
                  placeholder="Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Iconify
                          icon={"mdi:encryption-secure-outline"}
                          size={22}
                        ></Iconify>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              )}
            />
          </Grid>

          <Grid
            sx={{
              mt: 5,
              ml: 3,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              color={"warning"}
              type={"submit"}
              variant={"outlined"}
              size="small"
            >
              {!type ? "Login" : "Register"}
              <Iconify icon={"gala:secure"} size={16}></Iconify>
            </Button>
          </Grid>
          <Grid></Grid>
        </Grid>
      </form>
    </>
  );
};

export default React.memo(UserForm);
