import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './Components/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load all components
const Nav = lazy(() => import('./Components/Nav'));
const Home = lazy(() => import('./Components/Home'));
const ProductDetail = lazy(() => import('./Components/ProductDetail'));
const Cart = lazy(() => import('./Components/Cart'));
const Footer = lazy(() => import('./Components/Footer'));
const Search = lazy(() => import('./Components/Search'));
const NotFound = lazy(() => import('./Components/NotFound'));
const Signin = lazy(() => import('./Components/Signin'))
const Login = lazy(() => import('./Components/Login'))
const Profile = lazy(() => import('./Components/Profile'))
const Add = lazy(() => import('./Components/Add'))
function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Nav />
      </Suspense>

      <Routes>
        {/* Lazy loading for all routes */}
        <Route path='/' element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />

        <Route path='/pdetail' element={
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        } />

        <Route path='/show/:id' element={
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        } />

        <Route path='/cart' element={
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        } />

        <Route path='/search' element={
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        } />
        <Route path='/signin' element={
          <Suspense fallback={<Loading />}>
            <Signin />
          </Suspense>
        } />
        <Route path='/login' element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        } />
        <Route path='/profile' element={
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        } />
        <Route path='/add' element={
          <Suspense fallback={<Loading />}>
            <Add />
          </Suspense>
        } />

        <Route path='*' element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        } />
      </Routes>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
      <ToastContainer autoClose={1400}></ToastContainer>
    </div>
  );
}

export default App;
