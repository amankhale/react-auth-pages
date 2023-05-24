import "./App.css";
import "./styles/form.css";
import "./styles/utility.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Routes } from "./routes";

import { Web3Provider } from "./context/web3.context";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(Routes));
  return (
    <Web3Provider>
      <RouterProvider router={router} />
    </Web3Provider>
  );
}
