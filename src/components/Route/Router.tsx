import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginUserProvider } from "../../providers/LoginUserProvider";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";
import { UserManagement } from "../pages/UserManagement";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router: React.FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="user_management" element={<UserManagement />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
