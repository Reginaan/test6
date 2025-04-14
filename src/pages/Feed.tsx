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
          <div className="feed-card-header">
            <h3 className="feed-card-title">{item.title}</h3>
            <p className="feed-card-date">
              {new Date(item.createdAt).toLocaleDateString("ru-RU")}
            </p>
          </div>
          <p className="feed-card-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
