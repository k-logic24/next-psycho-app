import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";

import "bootstrap/scss/bootstrap.scss";
import "@/style/style.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
