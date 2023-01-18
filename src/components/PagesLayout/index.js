import { Container, Drawer } from "@components";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SettingsContext, useContext } from "@context";
import CartDrawer from "./components/CartDrawer";

const PagesLayout = ({ title = "React E-commerce Test App", children }) => {
  const { toggle, setToggle } = useContext(SettingsContext);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <HeaderComponent></HeaderComponent>
      <Drawer
        anchor={"right"}
        open={toggle}
        onClose={() => {
          setToggle(false);
        }}
      >
        <CartDrawer setToggle={setToggle} />
      </Drawer>
      <Container maxWidth="lg" sx={{ minHeight: "80vh" }}>
        {children}
      </Container>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default PagesLayout;
