import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Layout } from "./components/layouts";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
