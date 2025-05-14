import r2wc from "react-to-webcomponent";
import Hiradumi from "./Hiradumi";

const HiradumiWebComponent = r2wc(Hiradumi, {
  props: {
    title: "string",
    count: "number",
    highlight: "boolean"
  },
  shadowOptions: { mode: "open" },
  // childrenとheaderとfooterはスロットとして扱われます
});

customElements.define('hiradumi-component', HiradumiWebComponent);