import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
registerServiceWorker();
