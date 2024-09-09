import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ContactsPage from "./routes/contactsPage/ContactsPage.jsx";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/contactBook",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/contactsPage",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
