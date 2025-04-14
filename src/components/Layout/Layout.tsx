import { FC, PropsWithChildren } from 'react';
import { Sidebar, Header } from '@components';
import './Layout.css';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="layout-container">
    <Sidebar />
    <div className="layout-content-wrapper">
      <Header />
      <main className="layout-main">{children}</main>
    </div>
  </div>
);
