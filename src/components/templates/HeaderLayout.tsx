import React, { memo, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: React.FC = memo((props) => {
  // const { children } = props;
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
