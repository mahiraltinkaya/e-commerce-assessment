import React from "react";
import { Helmet } from "react-helmet";

const LayoutComponent = ({
  title = "E-commerce Platform developed React",
  children,
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      {children}
    </div>
  );
};

export default LayoutComponent;
