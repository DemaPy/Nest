import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthLayout } from "../pages/auth/layouts/AuthLayout";
import { VerifyEmail, Register } from "../pages/auth/pages";
import Resume from "../pages/resume";
import Dashboard from "../pages/dashboard";

const routes = createRoutesFromElements(
  <Route>
    <Route path="/auth" element={<AuthLayout />}>
      <Route path="register" element={<Register />} />

      <Route path="verify-email" element={<VerifyEmail />} />
    </Route>

    <Route path="dashboard" element={<Dashboard />} />
    <Route path="resume" element={<Resume />} />
  </Route>
);

export const router = createBrowserRouter(routes);
