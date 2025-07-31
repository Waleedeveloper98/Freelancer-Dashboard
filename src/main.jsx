import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/AdminContextProvider.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ThemeContextProvider>
      <AdminContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AdminContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>
);
