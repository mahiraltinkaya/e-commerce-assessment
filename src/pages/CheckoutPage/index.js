import React from "react";

import PagesLayout from "components/PagesLayout";
import CartProductList from "components/PagesLayout/components/CartProductList";
import { useSelector } from "@store";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
  Stepper,
  StepLabel,
  Step,
} from "@components";
import useCartTotals from "hooks/useCartTotals";
import { useNavigate } from "react-router-dom";
import PaymentStep from "./components/PaymentStep";
import ShipmentStep from "./components/ShipmentStep";
const steps = ["Shipment Information", "Complete Payment"];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const cartTotals = useCartTotals();
  const navigate = useNavigate;
  const { cart } = useSelector((state) => state.users);

  return (
    <PagesLayout>
      <Card elevation={0} sx={{ minHeight: "70vh" }}>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={7}>
              {cart && cart.length === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                    fontSize: 22,
                  }}
                >
                  There is no item in the cart.{" "}
                  <Button
                    onClick={() => {
                      navigate("/");
                    }}
                    color={"warning"}
                  >
                    Let's go Shopping
                  </Button>
                </Box>
              )}
              {cart.length > 0 && (
                <>
                  <Box sx={{ mx: 2 }}>
                    <Stepper activeStep={activeStep}>
                      {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                          <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </Box>
                  {activeStep === 0 && (
                    <Box sx={{ p: 3 }}>
                      <ShipmentStep></ShipmentStep>
                    </Box>
                  )}
                  {activeStep === 1 && (
                    <Box sx={{ p: 3 }}>
                      <PaymentStep></PaymentStep>
                    </Box>
                  )}
                </>
              )}
            </Grid>
            <Grid item xs={12} sm={5}>
              <Card
                elevation={0}
                sx={{ borderRadius: 2, border: ".5px solid #d9d9d9" }}
              >
                <CardContent>
                  {cart.length > 0 && (
                    <CartProductList cart={cart}></CartProductList>
                  )}
                </CardContent>
                <CardContent>
                  <Typography variant="body-1" sx={{ fontWeight: "bold" }}>
                    Subtotal : ${cartTotals().total}
                  </Typography>
                </CardContent>
                <Divider></Divider>
                <CardContent>
                  <Typography variant="body-1" sx={{ fontWeight: "bold" }}>
                    Tax : ${cartTotals().tax}
                  </Typography>
                </CardContent>
                <Divider></Divider>
                <CardContent>
                  <Typography variant="body-1" sx={{ fontWeight: "bold" }}>
                    Shipment : ${"0.00"}
                  </Typography>
                </CardContent>
                <Divider></Divider>
                <CardContent>
                  <Typography variant="body-1" sx={{ fontWeight: "bold" }}>
                    Total Pieces : {cartTotals().pieces} pcs.
                  </Typography>
                </CardContent>
                <Divider></Divider>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Total Price : ${cartTotals().total}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </PagesLayout>
  );
};

export default CheckoutPage;
