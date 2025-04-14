import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@components';

import { About, Bells, Channels, Chat, Feed, Home, Save, Video } from '@pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/feed',
    element: (
      <Layout>
        <Feed />
      </Layout>
    ),
  },
  {
    path: '/channels',
    element: (
      <Layout>
        <Channels />
      </Layout>
    ),
  },
  {
    path: '/video',
    element: (
      <Layout>
        <Video />
      </Layout>
    ),
  },
  {
    path: '/save',
    element: (
      <Layout>
        <Save />
      </Layout>
    ),
  },
  {
    path: '/bells',
    element: (
      <Layout>
        <Bells />
      </Layout>
    ),
  },
  {
    path: '/chat',
    element: (
      <Layout>
        <Chat />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);
