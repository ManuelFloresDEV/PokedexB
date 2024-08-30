import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
);
