import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import avatar from "@assets/icons/avatar.svg";
import "./Header.css";

export const Header = () => {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);

  const handleScroll = (event: Event) => {
    const target = event.target as Document;
    const scrollTop = target.documentElement.scrollTop || target.body.scrollTop;

    setHideHeader(scrollTop > 0);
  };

  useEffect(() => {
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
