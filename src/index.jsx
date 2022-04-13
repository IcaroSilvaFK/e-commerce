import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { RoutesApplication } from "./routes";
import { client } from "./configs/react-query";
import { store } from "./store/store";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <GlobalStyle />
        <RoutesApplication />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
