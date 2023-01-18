import { Container } from "@components";
import HeaderComponent from "components/HeaderComponent";
import FooterComponent from "components/FooterComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";
const PagesLayout = ({ title = "React E-commerce Test App", children }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      <HeaderComponent></HeaderComponent>
      <Container maxWidth="lg" sx={{ minHeight: "80vh" }}>
        {children}
      </Container>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default PagesLayout;
