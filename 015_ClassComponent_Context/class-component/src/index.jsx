import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App,AppWithClass } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const classElement= createRoot(document.getElementById("root-classes"));

root.render(
  <StrictMode>
    <App anyProp={"Hi"}/>
  </StrictMode>
);

classElement.render(
    <StrictMode>
        <AppWithClass/>
    </StrictMode>
);