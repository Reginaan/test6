import { FC } from "react";
import { mockData } from "../data/mock";
import "./Feed.css";

export const Feed: FC = () => {
  return (
    <div className="feed-cards">
      {mockData.map((item) => (
        <div key={item.id} className="feed-card">
          <img
            src={item.url}
            alt={item.title}
            className="feed-card-image"
            width={item.width / 4}
            height={item.height / 4}
          />
          <h3>{item.title}</h3>
          <p className="feed-card-date">
            {new Date(item.createdAt).toLocaleDateString("ru-RU")}
          </p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
