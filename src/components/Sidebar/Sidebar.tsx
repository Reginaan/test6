import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "../../assets/icons/logo sign (1).svg";
import { menu } from "./data/menu";
import infoIcon from "../../assets/icons/info.svg";
import "./Sidebar.css";
import counterIcon from "../../assets/icons/counter frame (1).svg";

export const Sidebar: FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <div className="sidebar-menu-wrapper">
        <Link to="/" className="sidebar-logo-link">
          <div className="sidebar-logo-wrapper">
            <img src={logoSrc} alt="Logo" className="sidebar-logo" />
            <h2>МТ.РУ</h2>
          </div>
        </Link>
        <div className="sidebar-menu">
          {menu.map(({ iconSrc, href, label }) => {
            const isActive = location.pathname === href;
            return (
              <Link to={href} key={href} className="sidebar-menu-item-link">
                <div
                  className={`sidebar-menu-item ${isActive ? "active" : ""}`}
                >
                  <img
                    src={iconSrc}
                    alt={label}
                    className="sidebar-menu-item-icon"
                  />
                  <span className="sidebar-menu-label">
                    {label}
                    {(label === "Уведомления" || label === "Чаты") && (
                      <img
                        src={counterIcon}
                        alt="1"
                        className="sidebar-menu-counter-icon"
                      />
                    )}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="sidebar-footer">
        <Link to="/about" className="sidebar-footer-link">
          <img
            src={infoIcon}
            alt="О компании"
            className="sidebar-footer-icon"
          />
          <span>О компании...</span>
        </Link>
      </div>
    </div>
  );
};
