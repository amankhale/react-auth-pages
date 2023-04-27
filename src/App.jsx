import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router-dom';
import Signup from './auth/pages/signup/Signup';
import Login from './auth/pages/login/Login';
import ForgotPassword from './auth/pages/forgot-password/ForgotPassword';
import AuthLayout from './layouts/auth-layout/AuthLayout';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Navigate to="auth" />} />
      <Route path='auth' element={<AuthLayout />}>
        <Route index element={<Navigate to="login" />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}