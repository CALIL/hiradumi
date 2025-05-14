import React from "react";
import ReactDOM from "react-dom/client";
import r2wc from "react-to-webcomponent";
import Hiradumi from "./Hiradumi";

const HiradumiWebComponent = r2wc(Hiradumi, React, ReactDOM, {
  props: {
    title: "string",
    count: "number",
    highlight: "boolean"
  }
});

customElements.define('hiradumi-component', HiradumiWebComponent);