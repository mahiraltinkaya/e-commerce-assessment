import React from "react";
import { Container, Drawer } from "@components";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SettingsContext, useContext } from "@context";
import CartDrawer from "./components/CartDrawer";
import LoginModal from "components/LoginModal";

const PagesLayout = ({ title = "React E-commerce Platform", children }) => {
  const { toggle, setToggle, loginModal, setLoginModal } =
    useContext(SettingsContext);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <Drawer
        anchor={"right"}
        open={toggle}
        onClose={() => {
          setToggle(false);
        }}
      >
        <CartDrawer setToggle={setToggle} />
      </Drawer>
      {loginModal && (
        <LoginModal open={loginModal} handleClose={setLoginModal}></LoginModal>
      )}
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <HeaderComponent></HeaderComponent>
        {children}
        <FooterComponent></FooterComponent>
      </Container>
    </>
  );
};

export default React.memo(PagesLayout);
