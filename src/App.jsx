import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { Redirect } from "./components/pages/Redirect";
import { NotFound } from "./components/pages/NotFound";
import { Commands } from "./components/pages/Commands";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/rp" element={<Redirect />} />
      <Route path="/commands" element={<Commands />} />
    </Routes>
  );
}