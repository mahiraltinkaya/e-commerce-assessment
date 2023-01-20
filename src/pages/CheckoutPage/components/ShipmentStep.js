import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Button, Iconify } from "@components";
import { useForm, Controller } from "react-hook-form";
import useInputMask from "hooks/useInputMask";
import { useSelector } from "@store";

const ShipmentStep = ({ onSubmit }) => {
  const { shipment } = useSelector((state) => state.generals);
  const inputMasked = useInputMask();
  const [phone, setPhone] = useState(shipment?.phone);

  const shipmentResolver = yup
    .object()
    .shape({
      firstname: yup
        .string()
        .required("Firstname field required")
        .matches(/[a-zA-Z]/, "Allows only characters"),
      lastname: yup
        .string()
        .required("Firstname field required")
        .matches(/[a-zA-Z]/, "Allows only characters"),
      address1: yup.string().required("Address field required "),
      address2: yup.string(),
      phone: yup
        .string()
        .min(12, "Please valid phone number")
        .required("Phone field required."),

      email: yup
        .string()
        .email("Please valid email")
        .required("Email field required"),
      city: yup.string().required("City field required"),
    })
    .required();

  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(shipmentResolver),
    defaultValues: shipment,
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={3}
          sx={{
            borderRadius: 4,
            p: 3,
            pl: 0,
            mt: 1,
          }}
        >
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstname"
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
                  placeholder="Firstname"
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastname"
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
                  placeholder="Lastname"
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
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
                  placeholder="Email"
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              value={phone || ""}
              size={"small"}
              placeholder="Phone Number"
              fullWidth
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              onChange={(e) => {
                setPhone(inputMasked("### ### ####", e.target.value));
                setValue("phone", phone);
                clearErrors("phone");
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="address1"
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
                  placeholder="Address 1"
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Controller
              name="address2"
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
                  placeholder="Address 2"
                ></TextField>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="city"
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
                  placeholder="City"
                ></TextField>
              )}
            />
          </Grid>
          <Grid
            sx={{
              my: 2,
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              color={"warning"}
              type={"submit"}
              variant={"outlined"}
              size="small"
            >
              Next <Iconify icon={"material-symbols:chevron-right"}></Iconify>
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default React.memo(ShipmentStep);
