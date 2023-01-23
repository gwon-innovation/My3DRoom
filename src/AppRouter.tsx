import { Routes, Route } from "react-router-dom";
import { Home } from "pages";
import { NavigationLinks } from "pages/NavigationLinks";

export default function AppRouter() {
  const PAGE_LIST = [{ path: NavigationLinks.Home, element: <Home /> }];

  return (
    <Routes>
      {PAGE_LIST.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
