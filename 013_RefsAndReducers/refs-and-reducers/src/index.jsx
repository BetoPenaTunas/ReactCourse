import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { FocusToTheFirstInput } from "./components/FocusToTheFirstInput";
import { ReducerTest } from "./components/ReducerTest";

const rootElement = document.getElementById("refs-reducers");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const focus = createRoot(document.getElementById("focus-first-elm"));
focus.render(
    <StrictMode>
        <FocusToTheFirstInput />
    </StrictMode>
);

const reduce=createRoot(document.getElementById("reduce"));
reduce.render(
  <StrictMode>
    <ReducerTest />
  </StrictMode>
);

