import { FC, PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import "./Layout.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content-wrapper">
        <Header />
        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
};
