import React, { Suspense, lazy } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import LoadingScreen from "components/LoadingScreen";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes("/")} />}>
      <Component {...props} />
    </Suspense>
  );
};

/* ROUTES */
const ProductsList = Loadable(lazy(() => import("pages/ProductsList")));
const ProductDetail = Loadable(lazy(() => import("pages/ProductDetail")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
