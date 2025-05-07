import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { AppProvider } from "./providers/appProvider.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
