import { FC } from "react";
import { useLocation } from "react-router-dom";
import avatar from "../../assets/icons/avatar (1).svg";
import "./Header.css";

export const Header: FC = () => {
  const location = useLocation();

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
    <header className="header">
      <div className="header-container">
        <img src={avatar} alt="avatar" />
        <h1>{getTitle()}</h1>
      </div>
    </header>
  );
};
