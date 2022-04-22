import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesCOnst from './constants/routes';
import Layout from './components/Layout';
import Error from './pages/error';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Products = lazy(() => import('./pages/products'));
const SingleProduct = lazy(() => import('./pages/singleProduct'));
const Checkout = lazy(() => import('./pages/checkout'));
const Cart = lazy(() => import('./pages/cart'));

const routes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route
        path={RoutesCOnst.HOME}
        element={
          <Suspense fallback={<div>....</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={RoutesCOnst.ABOUT}
        element={
          <Suspense fallback={<div>....</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path={RoutesCOnst.PRODUCTS}
        element={
          <Suspense fallback={<div>....</div>}>
            <Products />
          </Suspense>
        }
      />
      <Route
        path={RoutesCOnst.SINGLE_PRODUCT}
        element={
          <Suspense fallback={<div>....</div>}>
            <SingleProduct />
          </Suspense>
        }
      />
      <Route
        path={RoutesCOnst.CHECKOUT}
        element={
          <Suspense fallback={<div>....</div>}>
            <Checkout />
          </Suspense>
        }
      />
      <Route
        path={RoutesCOnst.CART}
        element={
          <Suspense fallback={<div>....</div>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>....</div>}>
            <Error />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default routes;
