import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayouts";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" />
      </Route>
    </Routes>
  );
};
