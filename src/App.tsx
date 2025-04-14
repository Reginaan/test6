import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";
import { Feed } from "./pages/Feed";
import { Channels } from "./pages/Channels";
import { Video } from "./pages/Video";
import { Save } from "./pages/Save";
import { Bells } from "./pages/Bells";
import { Chat } from "./pages/Chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/video" element={<Video />} />
          <Route path="/save" element={<Save />} />
          <Route path="/bells" element={<Bells />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
