import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  createHashHistory,
} from "@tanstack/react-router";
import RealizationsGallery from "./components/RealizationsGallery";
import MainSections from "./components/MainSections.tsx";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainSections,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: RealizationsGallery,
});

const routeTree = rootRoute.addChildren([indexRoute, galleryRoute]);

const router = createRouter({
  routeTree,
  history: createHashHistory(),
  basepath: "/", // for GitHub Pages when repo name matches project name
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
