import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { GlobalState } from "./contexts";
import App from "./App.tsx";

import "./index.scss";
import { Message } from "./components/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Message message="Something went wrong ..." />}>
      <BrowserRouter>
        <GlobalState>
          <App />
        </GlobalState>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
