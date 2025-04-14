import { mockCardsData } from '@data/mock';
import './styles/Feed.css';

export const Feed = () => (
  <div className="feed-cards">
    {mockCardsData.map(({ id, url, title, createdAt, description }) => (
      <div key={id} className="feed-card">
        <img src={url} alt={title} className="feed-card-image" />
        <div className="feed-card-header">
          <h3 className="feed-card-title">{title}</h3>
          <p className="feed-card-date">
            {new Date(createdAt).toLocaleDateString('ru-RU')}
          </p>
        </div>
        <p className="feed-card-description">{description}</p>
      </div>
    ))}
  </div>
);
