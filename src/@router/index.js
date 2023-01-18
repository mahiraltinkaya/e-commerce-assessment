import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  useRoutes,
  useLocation,
} from "react-router-dom";
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
const ProductsList = Loadable(lazy(() => import("pages/ProducstList")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
