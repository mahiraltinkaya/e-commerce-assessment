import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Iconify,
} from "@components";
import { destroyCart } from "@store/slices/userSlice";
import { dispatch } from "@store";

import { useNavigate } from "react-router-dom";
const OrderResult = ({ success = true, prevStep }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
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
          {success && (
            <Grid item xs={12}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <img src="/images/success.png" alt="" height={150} />
                </CardContent>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Congratz. Payment Successful
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}

          {!success && (
            <Grid item xs={12}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <img src="/images/failure.png" alt="" height={150} />
                </CardContent>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Oh ups. Payment was failed.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
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
              variant={"outlined"}
              size="small"
              disabled={!success}
              onClick={() => {
                dispatch(destroyCart());
                navigate("/");
              }}
            >
              Let's continue shopping
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default React.memo(OrderResult);
