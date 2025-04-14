import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import "./Layout.css";

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content-wrapper">
        <Header />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
