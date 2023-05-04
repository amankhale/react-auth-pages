import "./App.css";
import "./styles/form.css";
import "./styles/utility.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Routes } from "./routes";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(Routes));
  return <RouterProvider router={router} />;
}
