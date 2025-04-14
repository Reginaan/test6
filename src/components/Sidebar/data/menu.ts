import feed from '@assets/icons/icon.svg';
import channels from '@assets/icons/compass.svg';
import video from '@assets/icons/video.svg';
import save from '@assets/icons/bookmark.svg';
import bells from '@assets/icons/bell.svg';
import chat from '@assets/icons/chat.svg';
import { MenuItem } from '@types';

export const newsCounts = [
  { path: 'chat', count: 1 },
  { path: 'bells', count: 1 },
];

export const menu: MenuItem[] = [
  { iconSrc: feed, href: '/feed', label: 'Лента' },
  { iconSrc: channels, href: '/channels', label: 'Каналы' },
  { iconSrc: video, href: '/video', label: 'Видео' },
  { iconSrc: save, href: '/save', label: 'Сохраненное' },
  { iconSrc: bells, href: '/bells', label: 'Уведомления' },
  { iconSrc: chat, href: '/chat', label: 'Чаты' },
];
