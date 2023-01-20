import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Button, Iconify } from "@components";
import { useForm, Controller } from "react-hook-form";
import useInputMask from "hooks/useInputMask";
import { useSelector } from "@store";

const PaymentStep = ({ onSubmit, prevStep }) => {
  const { cc } = useSelector((state) => state.generals);
  const inputMasked = useInputMask();
  const [cardNumber, setCardNumber] = useState(cc?.cc);
  const [expire, setExpire] = useState(cc?.expire);
  const [cvv, setCvv] = useState(cc?.cvv);

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
      cc: yup.string().required("Address field required "),
      expire: yup.string().required("CVV field required"),
      cvv: yup.string().required("Email field required"),
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
    defaultValues: cc,
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
          <Grid item xs={12} sm={12}>
            <TextField
              value={cardNumber || ""}
              size={"small"}
              placeholder="Credit & Debit Card Number"
              fullWidth
              {...register("cc")}
              aria-invalid={errors.phone ? "true" : "false"}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              onChange={(e) => {
                setCardNumber(
                  inputMasked("#### #### #### ####", e.target.value)
                );
                setValue("cc", cardNumber);
                clearErrors("cc");
              }}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField
              value={expire || ""}
              size={"small"}
              placeholder="Expire Date"
              fullWidth
              {...register("expire")}
              aria-invalid={errors.phone ? "true" : "false"}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              onChange={(e) => {
                setExpire(inputMasked("##/####", e.target.value));
                setValue("expire", expire);
                clearErrors("expire");
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              value={cvv || ""}
              size={"small"}
              placeholder="Cvv"
              fullWidth
              {...register("cvv")}
              aria-invalid={errors.phone ? "true" : "false"}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              onChange={(e) => {
                setCvv(inputMasked("###", e.target.value));
                setValue("cvv", expire);
                clearErrors("cvv");
              }}
            ></TextField>
          </Grid>

          <Grid
            sx={{
              my: 2,
              ml: 3,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              color={"warning"}
              variant={"outlined"}
              size="small"
              onClick={() => {
                prevStep(-1);
              }}
            >
              <Iconify icon={"material-symbols:chevron-left"}></Iconify>Prev
            </Button>

            <Button
              color={"warning"}
              type={"submit"}
              variant={"outlined"}
              size="small"
            >
              Complete Order
              <Iconify icon={"material-symbols:chevron-right"}></Iconify>
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default React.memo(PaymentStep);
