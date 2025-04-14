import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import avatar from "../../assets/icons/avatar (1).svg";
import "./Header.css";

export const Header: FC = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setHideHeader(false);
      } else if (currentScroll > prevScrollY.current) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      prevScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Главная";
      case "/feed":
        return "Лента";
      case "/channels":
        return "Каналы";
      case "/video":
        return "Видео";
      case "/save":
        return "Сохраненное";
      case "/bells":
        return "Уведомления";
      case "/chat":
        return "Чаты";
      default:
        return "МТ.РУ";
    }
  };

  return (
    <header className={`header ${hideHeader ? "header--hidden" : ""}`}>
      <div className="header-container">
        <img src={avatar} alt="avatar" />
        <h1>{getTitle()}</h1>
      </div>
    </header>
  );
};
